import * as create from './Create-company'
import * as getAllCompanies from './Get-all-companies'
import * as getCompanyById from './Get-company-by-id'
import * as updateCompany from './Update-company'
import * as deleteCompany from './Delete-company'

export const CompaniesController = {
    ...create,
    ...getAllCompanies,
    ...getCompanyById,
    ...updateCompany,
    ...deleteCompany
}
