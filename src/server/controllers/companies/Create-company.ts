import { Request, Response } from 'express'
import * as yup from 'yup'
import { validation } from '../../shared/middlewares/Validation'
import { StatusCodes } from 'http-status-codes'
import { ICompany } from '../../database/models'
import { CompaniesProvider } from '../../database/providers/companies'

interface IBodyProps extends Omit<ICompany, 'id'> {}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(
        yup.object().shape({
            name: yup.string().required(),
            corporate_name: yup.string().required(),
            cnpj: yup.string().required().min(14),
            cep: yup.string().required().min(8),
            city: yup.string().required(),
            state: yup.string().required(),
            neighborhood: yup.string().required(),
            complement: yup.string().required()
        })
    )
}))

export const createCompany = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

    const result = await CompaniesProvider.create(req.body)

    if (result instanceof Error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: result.message
            }
        })
    }
    return res.status(StatusCodes.OK).json(result)
}
