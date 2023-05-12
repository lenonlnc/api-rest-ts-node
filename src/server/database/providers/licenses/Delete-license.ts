import { ETableNames } from '../../ETable-names'
import { Knex } from '../../knex'

export const deleteLicense = async (id: number): Promise<boolean | Error> => {
    try {
        await Knex(ETableNames.license).where('id', id).delete()

        return true
    } catch (e) {
        return Error(`Ocorreu um erro ao deletar a licença: ${e}`)
    }
}
