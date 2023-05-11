import { Router } from 'express'
import { CompaniesController } from '../controllers'

const router = Router()
router.get('/companies', CompaniesController.getAllCompaniesValidation, CompaniesController.getAllCompanies)
router.get('/company/:id', CompaniesController.getCompanyByIdValidation, CompaniesController.getCompanyById)

// post
router.post('/company/insert', CompaniesController.createValidation, CompaniesController.createCompany)

// put
router.put('/company/update/:id', CompaniesController.updateCompanyValidation, CompaniesController.updateCompany)

// delete
router.delete('/company/delete/:id', CompaniesController.deleteCompanyValidation, CompaniesController.deleteCompany)

export { router }
