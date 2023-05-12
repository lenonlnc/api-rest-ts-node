import { ETableNames } from '../../ETable-names'
import { Knex } from '../../knex'
import { ILicense } from '../../models'

export const updateLicense = async (id: number, license: Omit<ILicense, 'id'>): Promise<boolean | Error> => {
    try {
        await Knex(ETableNames.license).update(license).where('id', id)

        return true
    } catch (e) {
        return Error(`Ocorreu um erro ao atualizar os dados da licença: ${e}`)
    }
}
