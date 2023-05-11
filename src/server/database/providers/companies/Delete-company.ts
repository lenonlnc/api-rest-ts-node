import { ETableNames } from '../../ETable-names'
import { Knex } from '../../knex'

export const deleteCompany = async (id: number): Promise<boolean | Error> => {
    try {
        await Knex(ETableNames.company).where('id', id).delete()

        return true
    } catch (e) {
        return Error(`Ocorreu um erro ao criar a empresa: ${e}`)
    }
}
