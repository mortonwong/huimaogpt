import mysql from 'mysql'

export async function getDefaultToken(){
    const connection = mysql.createConnection({
        host: '43.131.251.187', // 数据库的主机地址
        user: 'chat', // 数据库的用户名
        password: 'Jarin942422490', // 数据库的密码
        database: 'chat_huimao_fun', // 数据库的名称
        port: 3307,
      })
        // 连接到数据库
  await new Promise<void>((resolve, reject) => {
    connection.connect((err) => {
      if (err) {
        console.error(`error connecting: ${err.stack}`)
        reject(err)
        return
      }
      resolve()
      console.log(`connected as id ${connection.threadId}`)
    })
  })
  // 执行查询语句，并处理结果或错误
  return await new Promise((resolve, reject) => {
    // 定义一个查询语句，从token表中取userid为0的token值
    const query = 'SELECT token FROM token WHERE userid = 1'
    connection.query(query, (error, results, fields) => {
      if (error) {
        console.log(error)
        reject(error)
      }
      else {
        console.log('数据库：', results[0].token) // 打印查询结果
        resolve(results[0].token)

        connection.end()
      }
    })
  })
}