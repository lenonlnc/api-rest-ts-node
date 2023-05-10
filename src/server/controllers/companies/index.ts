import * as create from './Create-company'
import * as getAllCompanies from './Get-all-companies'
export const CompaniesController = {
    ...create,
    ...getAllCompanies
}
