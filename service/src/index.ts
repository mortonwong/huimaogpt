import type { Request, Response } from 'express'
import express from 'express'
import cookieParser from 'cookie-parser'
import * as dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport'
import type { RequestProps } from './types'
import type { ChatMessage } from './chatgpt'
import { chatConfig, chatReplyProcess, currentModel } from './chatgpt'
import { auth } from './middleware/auth'
import { limiter } from './middleware/limiter'
import { isNotEmptyString } from './utils/is'
import { createUser, sendSQL } from './utils/mysql'
import { decryptVerificationCode, encryptVerificationCode } from './utils'

const app = express()
const router = express.Router()
app.use(cookieParser())
dotenv.config()

app.use(express.static('public'))
app.use(express.json())

app.all('*', (_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'authorization, Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  next()
})

router.post('/chat-process', [auth, limiter], async (req, res) => {
  res.setHeader('Content-type', 'application/octet-stream')

  try {
    const { prompt, options = {}, systemMessage, temperature, top_p } = req.body as RequestProps
    let firstChunk = true
    await chatReplyProcess({
      message: prompt,
      lastContext: options,
      process: (chat: ChatMessage) => {
        res.write(firstChunk ? JSON.stringify(chat) : `\n${JSON.stringify(chat)}`)
        firstChunk = false
      },
      systemMessage,
      temperature,
      top_p,
    })
  }
  catch (error) {
    res.write(JSON.stringify(error))
  }
  finally {
    res.end()
  }
})

router.post('/config', auth, async (req, res) => {
  try {
    const response = await chatConfig()
    res.send(response)
  }
  catch (error) {
    res.send(error)
  }
})

router.post('/session', async (req, res) => {
  try {
    const AUTH_SECRET_KEY = process.env.AUTH_SECRET_KEY
    const hasAuth = isNotEmptyString(AUTH_SECRET_KEY)
    res.send({ status: 'Success', message: '', data: { auth: hasAuth, model: currentModel() } })
  }
  catch (error) {
    res.send({ status: 'Fail', message: error.message, data: null })
  }
})

router.post('/verify', async (req, res) => {
  try {
    const { token } = req.body as { token: string }
    if (!token)
      throw new Error('Secret key is empty')

    if (process.env.AUTH_SECRET_KEY !== token)
      throw new Error('密钥无效 | Secret key is invalid')

    res.send({ status: 'Success', message: 'Verify successfully', data: null })
  }
  catch (error) {
    res.send({ status: 'Fail', message: error.message, data: null })
  }
})
router.post('/sendemail', async (req, res) => {
  try {
    const { email } = req.body as { email: string }
    // 检验电子邮箱
    try {
      const result = await sendSQL('SELECT * FROM user WHERE email = \'942422490@qq.com\';')
      console.log(result)
      if (result) {
        res.send({ status: 'Fail', message: '该邮箱已被注册' })
        return
      }
    }
    catch (error) {
      res.status(500).send({ message: '服务器错误' })
    }
    const code = String(Math.floor(100000 + Math.random() * 900000))

    const secretCode = encryptVerificationCode(code)

    const transport = nodemailer.createTransport(
      smtpTransport({
        host: 'smtp.exmail.qq.com',
        port: 465,
        auth: {
          user: 'morton@huimao.fun',
          pass: 'A6pQYNWLdcP63auz', // 这是邮箱的授权码不是登录密码。 安全登录的客户端专用密码：
        },
      }),
    )

    transport.sendMail(
      {
        from: 'morton@huimao.fun',
        to: email,
        subject: '【知潮GPT】注册验证码',
        html: `验证码${code}，10分钟内有效。验证码提供给他人可能导致账号被盗，请勿转发或泄露。`,
      },
      (error, response) => {
        if (error) {
          console.log(error)
          res.status(500).send('Failed to send verification email.')
        }
        else {
          res.send({ status: 'Success', message: '邮件发送成功', SCC: secretCode })
          console.log('send suceess ', email, ' ', code)
        }
      },
    )
  }
  catch (error) {
    res.status(500).send({ status: 'Fail', message: error.message, data: null })
  }
})
router.post('/usercreate', async (req: Request, res: Response) => {
  const { email, emailCode: code, userName, password, SCC } = req.body as { email: string; emailCode: string; userName: string; password: string; SCC: string }
  // Verify the verification code
  if (code !== decryptVerificationCode(SCC)) {
    res.send({ status: 'Fail', message: '验证码错误' })
    return
  }
  if (await createUser(email, userName, password))
    res.send({ status: 'Success', message: '注册成功' })
  else
    res.status(500).send({ status: 'Fail', message: '注册失败' })
})
router.post('/userlogin', async (req: Request, res: Response) => {
  const { userName, password, type } = req.body as { userName: string; password: string; type: string }
  const result = await sendSQL(`SELECT * FROM user WHERE ${type} = '${userName}' AND password = '${password}'`)
  if ((result as any).length)
    res.send({ status: 'Success', message: '登录成功', userName: result[0].username })

  else
    res.status(500).send({ status: 'Fail', message: '登录失败' })
})

app.use('', router)
app.use('/api', router)
app.set('trust proxy', 1)
app.listen(3002, () => globalThis.console.log('好好Server is running on port 3002'))
