import { ETableNames } from '../../ETable-names'
import { Knex } from '../../knex'
import { ILicense } from '../../models'

export const create = async (license: Omit<ILicense, 'id'>): Promise<number | Error> => {
    try {
        const [result] = await Knex(ETableNames.license).insert(license)
        return result
    } catch (e) {
        return Error(`Ocorreu um erro ao criar a licença: ${e}`)
    }
}
