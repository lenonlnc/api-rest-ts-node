import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { CompaniesController } from '../controllers'

const router = Router()
router.get('/companies', (req, res) => {
    res.send('hello world')
    return res.send(StatusCodes.ACCEPTED).json()
})
router.get('/company/:id', (req, res) => {
    res.send('hello world')
})

// post
router.post('/company/insert', CompaniesController.createCompany)

// put
router.put('/company/update/:id', (req, res) => {
    res.send('hello world')
})

// delete
router.delete('/company/delete/:id', (req, res) => {
    res.send('hello world')
})
export { router }
