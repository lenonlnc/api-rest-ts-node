import { Request, Response } from 'express'
import * as yup from 'yup'
import { validation } from '../../shared/middlewares/Validation'
import { StatusCodes } from 'http-status-codes'
import { LicensesProvider } from '../../database/providers/licenses'

interface IQueryParams {
    id?: number
    page?: number
    limit?: number
}

export const getAllLicensesValidation = validation((getSchema) => ({
    query: getSchema<IQueryParams>(
        yup.object().shape({
            page: yup.number().required().moreThan(0),
            limit: yup.number().required().moreThan(0)
        })
    )
}))

export const getAllLicenses = async (req: Request<{}, {}, {}, IQueryParams>, res: Response) => {
    const result = await LicensesProvider.getAllLicenses(req.query.page || 1, req.query.limit || 10)
    if (result instanceof Error) {
        return res.status(StatusCodes.NOT_FOUND).json({
            errors: {
                default: result.message
            }
        })
    }
    return res.status(StatusCodes.OK).json(result)
}
