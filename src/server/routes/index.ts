import { Router } from 'express'
import { CompaniesController, LicensesController } from '../controllers'

const router = Router()
// get
router.get('/companies', CompaniesController.getAllCompaniesValidation, CompaniesController.getAllCompanies)
router.get('/company/:id', CompaniesController.getCompanyByIdValidation, CompaniesController.getCompanyById)

router.get('/licenses', LicensesController.getAllLicensesValidation, LicensesController.getAllLicenses)
router.get('/license/:id', LicensesController.getLicenseByIdValidation, LicensesController.getLicenseById)

// post
router.post('/company/insert', CompaniesController.createValidation, CompaniesController.createCompany)
router.post('/license/insert', LicensesController.createLicenseValidation, LicensesController.createLicense)

// put
router.put('/company/update/:id', CompaniesController.updateCompanyValidation, CompaniesController.updateCompany)
router.put('/license/update/:id', LicensesController.updateLicenseValidation, LicensesController.updateLicense)

// delete
router.delete('/company/delete/:id', CompaniesController.deleteCompanyValidation, CompaniesController.deleteCompany)
router.delete('/license/delete/:id', LicensesController.deleteLicenseValidation, LicensesController.deleteLicense)


export { router }
