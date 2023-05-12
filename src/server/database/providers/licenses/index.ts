import * as create from './Create-License'
import * as deleteLicense from './Delete-license'
import * as getAllLicenses from './Get-all-licenses'
import * as getLicenseById from './Get-license-by-id'
import * as updateLicense from './Update-license'

export const LicensesProvider = {
    ...create,
    ...deleteLicense,
    ...getAllLicenses,
    ...getLicenseById,
    ...updateLicense
}
