import mysql from 'mysql'
// 创建连接池，并配置连接参数
const pool = mysql.createPool({
  connectionLimit: 10, // 连接池中最大连接数
  host: '43.131.251.187', // 数据库的主机地址
  user: 'chat', // 数据库的用户名
  password: 'Jarin942422490', // 数据库的密码
  database: 'chat_huimao_fun', // 数据库的名称
  port: 3307,
})
export async function sendSQL(sql) {
  // const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)'; value数组替换问号
  let connection = null
  try {
    // 从连接池中获取一个可用的连接
    connection = await new Promise((resolve, reject) => {
      pool.getConnection((err, conn) => {
        if (err) {
          console.error(`error getting connection from pool: ${err.stack}`)
          reject(err)
        }
        else {
          resolve(conn)
        }
      })
    })

    // 执行查询语句，并处理结果或错误
    const query = sql
    const results = await new Promise((resolve, reject) => {
      connection.query(query, (error, results, fields) => {
        if (error) {
          console.error(`error executing query ${query}: ${error.stack}`)
          reject(error)
        }
        else {
          resolve(results)
        }
      })
    })
    console.log('通用数据库：', results) // 打印查询结果

    return results
  }
  finally {
    // 释放连接到连接池中
    if (connection)
      connection.release()
  }
}
export async function getDefaultToken() {
  let connection = null
  try {
    // 从连接池中获取一个可用的连接
    connection = await new Promise((resolve, reject) => {
      pool.getConnection((err, conn) => {
        if (err) {
          console.error(`error getting connection from pool: ${err.stack}`)
          reject(err)
        }
        else {
          resolve(conn)
        }
      })
    })

    // 执行查询语句，并处理结果或错误
    const query = 'SELECT token FROM token WHERE userid = 1'
    const results = await new Promise((resolve, reject) => {
      connection.query(query, (error, results, fields) => {
        if (error) {
          console.error(`error executing query ${query}: ${error.stack}`)
          reject(error)
        }
        else {
          resolve(results)
        }
      })
    })
    console.log('数据库：', results[0].token) // 打印查询结果

    return results[0].token
  }
  finally {
    // 释放连接到连接池中
    if (connection)
      connection.release()
  }
}

/**
 * 创建用户
 * @param {string} email 邮箱地址
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @return {Promise<boolean>} 操作结果，true 表示插入成功，false 表示插入失败
 */
export async function createUser(email: string, userName: string, password: string): Promise<boolean> {
  let connection = null

  try {
    // 从连接池中获取一个可用的连接
    connection = await new Promise<mysql.PoolConnection>((resolve, reject) => {
      pool.getConnection((err, conn) => {
        if (err) {
          console.error(`error getting connection from pool: ${err.stack}`)
          reject(err)
        }
        else {
          resolve(conn)
        }
      })
    })

    // 插入新用户数据到数据库中
    const query = 'INSERT INTO user (email, username, password) VALUES (?, ?, ?)'
    const values = [email, userName, password]

    const result = await new Promise<mysql.OkPacket>((resolve, reject) => {
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error(`error executing query ${query}: ${error.stack}`)
          reject(error)
        }
        else {
          console.log(results)
          resolve(results)
        }
      })
    })

    // 返回操作结果
    return result.affectedRows > 0
  }
  finally {
    // 释放连接到连接池中
    if (connection)
      connection.release()
  }
}
