import dotenv from 'dotenv'
dotenv.config()

import mysql2 from 'mysql2'

const params = {
    user: process.env.USER,
    password: process.env.PWD,
    host: process.env.HOST,
    database: process.env.DATABASE
}

const Connect = async () =>
    new Promise<mysql2.Connection>((resolve, reject) => {
        const connection = mysql2.createConnection(params)
        connection.connect((e) => {
            if (e) {
                reject(e)
                return
            }
            resolve(connection)
        })
    })

const Query = async (connection: mysql2.Connection, query: string) =>
    new Promise((resolve, reject) => {
        connection.query(query, connection, (e, result) => {
            if (e) {
                reject(e)
                return
            }
            resolve(result)
        })
    })

export { Connect, Query }
