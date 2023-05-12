import * as create from './Create-license'
import * as deleteLicense from './Delete-license'
import * as getAllLicenses from './Get-all-companies'
import * as getLicenseById from './Get-license-by-id'
import * as updateLicense from './Update-license'

export const LicensesController = {
    ...create,
    ...deleteLicense,
    ...getAllLicenses,
    ...getLicenseById,
    ...updateLicense
}
