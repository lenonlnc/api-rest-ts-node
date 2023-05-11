import { ETableNames } from '../../ETable-names'
import { Knex } from '../../knex'
import { ICompany } from '../../models'

export const updateCompany = async (id: number, company: Omit<ICompany, 'id'>): Promise<boolean | Error> => {
    try {
        await Knex(ETableNames.company).update(company).where('id', id)

        return true
    } catch (e) {
        return Error(`Ocorreu um erro ao criar a empresa: ${e}`)
    }
}
