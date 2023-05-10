import { Request, Response } from 'express'
import * as yup from 'yup'
import { validation } from '../../shared/middlewares/Validation'
import { StatusCodes } from 'http-status-codes'

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

export const createValidation = validation({
    body: yup.object().shape({
        name: yup.string().required(),
        corporate_name: yup.string().required(),
        cnpj: yup.string().required().min(14),
        cep: yup.string().required().min(8),
        city: yup.string().required(),
        state: yup.string().required(),
        neighborhood: yup.string().required(),
        complement: yup.string().required()
    })
})

export const createCompany = async (req: Request<{}, {}, ICompany>, res: Response) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('not implemented yet')
}
