import { Request, Response } from 'express'
import * as yup from 'yup'
import { validation } from '../../shared/middlewares/Validation'
import { StatusCodes } from 'http-status-codes'
import { CompaniesProvider } from '../../database/providers/companies'

interface IParamProps {
    id?: number
}

export const deleteCompanyValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(
        yup.object().shape({
            id: yup.number().integer().required().moreThan(0)
        })
    )
}))

export const deleteCompany = async (req: Request<IParamProps>, res: Response) => {
    const result = await CompaniesProvider.deleteCompany(req.params.id!)

    if (result instanceof Error) {
        return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            errors: {
                default: result.message
            }
        })
    }
    return res.status(StatusCodes.OK)
}
