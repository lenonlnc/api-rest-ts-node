import express from 'express'

const server =  express()

server.get('/api', (req, res) => {
    res.send('hello world')
})

export { server }