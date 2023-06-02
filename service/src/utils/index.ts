import crypto from 'crypto'
interface SendResponseOptions<T = any> {
  type: 'Success' | 'Fail'
  message?: string
  data?: T
}

export function sendResponse<T>(options: SendResponseOptions<T>) {
  if (options.type === 'Success') {
    return Promise.resolve({
      message: options.message ?? null,
      data: options.data ?? null,
      status: options.type,
    })
  }

  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({
    message: options.message ?? 'Failed',
    data: options.data ?? null,
    status: options.type,
  })
}
const defaultkey = Buffer.from('dda64873b623c8ba7af23622c11408e7ca29b94755dc828bad77b906d4369629', 'hex')
// 加密验证码
export function encryptVerificationCode(verificationCode) {
  const key = defaultkey // 算法所需的密钥
  const algorithm = 'aes-256-cbc' // 加密算法名称
  const iv = crypto.randomBytes(16) // 初始化向量

  const cipher = crypto.createCipheriv(algorithm, key, iv)
  let encrypted = cipher.update(verificationCode, 'utf8', 'hex')
  encrypted += cipher.final('hex')

  const result = `${iv.toString('hex')}:${encrypted}`
  return result
}

// 解密验证码
export function decryptVerificationCode(hashedCode) {
  const key = defaultkey // 算法所需的密钥
  const algorithm = 'aes-256-cbc' // 加密算法名称

  // 获取初始化向量和加密后的数据
  const [iv, encrypted] = hashedCode.split(':')
  const ivBuffer = Buffer.from(iv, 'hex')
  const encryptedBuffer = Buffer.from(encrypted, 'hex')

  const decipher = crypto.createDecipheriv(algorithm, key, ivBuffer)
  let decrypted = decipher.update(encryptedBuffer).toString('utf8') // 解密数据并转换为UTF-8编码的字符串
  decrypted += decipher.final().toString('utf8')

  return decrypted
}
