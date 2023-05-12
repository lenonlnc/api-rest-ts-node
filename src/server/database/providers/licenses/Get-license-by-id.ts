import { ETableNames } from '../../ETable-names'
import { Knex } from '../../knex'
import { ILicense } from '../../models'

export const getLicenseById = async (id: number): Promise<ILicense | Error> => {
    try {
        const result = await Knex(ETableNames.license).select('*').where('id', id).first()

        if (result) {
            return result
        } else {
            return Error(`Ocorreu um erro inesperado`)
        }
    } catch (e) {
        return Error(`Ocorreu um erro inesperado: ${e}`)
    }
}
