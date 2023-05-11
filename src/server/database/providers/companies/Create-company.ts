import { ETableNames } from '../../ETable-names'
import { Knex } from '../../knex'
import { ICompany } from '../../models'

export const create = async (company: Omit<ICompany, 'id'>): Promise<number | Error> => {
    try {
        const [result] = await Knex(ETableNames.company).insert(company)
        return result
    } catch (e) {
        return Error(`Ocorreu um erro ao criar a empresa: ${e}`)
    }
}
