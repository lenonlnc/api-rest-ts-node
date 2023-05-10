import { Request, Response } from 'express'
import * as yup from 'yup'
import { validation } from '../../shared/middlewares/Validation'
import { StatusCodes } from 'http-status-codes'

interface IQueryParams {
    name?: string
    corporate_name?: string
    cnpj?: string
    cep?: string
    city?: string
    state?: string
    neighborhood?: string
    complement?: string
}

export const getAllCompaniesValidation = validation({
    body: yup.object().shape({
        name: yup.string().notRequired(),
        corporate_name: yup.string().notRequired(),
        cnpj: yup.string().notRequired().min(14),
        cep: yup.string().notRequired().min(8),
        city: yup.string().notRequired(),
        state: yup.string().notRequired(),
        neighborhood: yup.string().notRequired(),
        complement: yup.string().notRequired()
    })
})

export const getAllCompanies = async (req: Request<{}, {}, IQueryParams>, res: Response) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('not implemented yet')
}
