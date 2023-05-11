import { ETableNames } from '../../ETable-names'
import { Knex } from '../../knex'
import { ICompany } from '../../models'

export const getAllCompanies = async (page: number, limit: number): Promise<ICompany[] | Error> => {
    try {
        const result = await Knex(ETableNames.company)
            .select('*')
            .offset((page - 1) * limit)

        return result
    } catch (e) {
        return Error(`Ocorreu um erro ao criar a empresa: ${e}`)
    }
}
