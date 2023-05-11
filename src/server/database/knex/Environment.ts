import { Knex } from 'knex'
import dotenv from 'dotenv'
dotenv.config()

export const development: Knex.Config = {
    client: 'mysql2',
    connection: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PWD,
        database: process.env.DATABASE
    }
}
