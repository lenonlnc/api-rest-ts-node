import dotenv from 'dotenv'
dotenv.config()

import { server } from './server/Server'

server.listen(process.env.SERVER_PORT, () => console.log(`Server ready and running at PORT: ${process.env.SERVER_PORT}`))