import { Request, Response } from 'express'
import * as yup from 'yup'

interface ICompany {
    name: string
    corporate_name: string
    cnpj: string
    cep: string
    city: string
    state: string
    neighborhood: string
    complement: string
}
const bodyValidation: yup.Schema<ICompany> = yup.object().shape({
    name: yup.string().required(),
    corporate_name: yup.string().required(),
    cnpj: yup.string().required().min(14),
    cep: yup.string().required().min(8),
    city: yup.string().required(),
    state: yup.string().required(),
    neighborhood: yup.string().required(),
    complement: yup.string().required()
})

export const createCompany = async (req: Request<{}, {}, ICompany>, res: Response) => {
    let validData: ICompany | undefined = undefined
    try {
        await bodyValidation.validate(validData)
        return res.send('Company created')
    } catch (e) {
        const error = e as yup.ValidationError

        return res.json({
            errors: {
                default: error.message
            }
        })
    }
}
