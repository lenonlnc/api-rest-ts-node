import { ETableNames } from '../../ETable-names'
import { Knex } from '../../knex'
import { ICompany } from '../../models/Company'

export const getCompanyById = async (id: number): Promise<ICompany | Error> => {
    try {
        const result = await Knex(ETableNames.company).select('*').where('id', id).first()

        if (result) {
            return result
        } else {
            return Error(`Ocorreu um erro ao criar a empresa`)
        }
    } catch (e) {
        return Error(`Ocorreu um erro ao criar a empresa: ${e}`)
    }
}
