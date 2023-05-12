import { ETableNames } from '../../ETable-names'
import { Knex } from '../../knex'
import { ILicense } from '../../models'

export const getAllLicenses = async (page: number, limit: number): Promise<ILicense[] | Error> => {
    try {
        const result = await Knex(ETableNames.license)
            .select('*')
            .offset((page - 1) * limit)

        return result
    } catch (e) {
        return Error(`Ocorreu um erro inesperado: ${e}`)
    }
}
