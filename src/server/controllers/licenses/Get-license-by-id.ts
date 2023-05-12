import { Request, Response } from 'express'
import * as yup from 'yup'
import { validation } from '../../shared/middlewares/Validation'
import { StatusCodes } from 'http-status-codes'
import { LicensesProvider } from '../../database/providers/licenses'

interface IParamProps {
    id?: number
}

export const getLicenseByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(
        yup.object().shape({
            id: yup.number().integer().required().moreThan(0)
        })
    )
}))

export const getLicenseById = async (req: Request<IParamProps>, res: Response) => {
    const result = await LicensesProvider.getLicenseById(req.params.id!)
    if (result instanceof Error) {
        return res.status(StatusCodes.NOT_FOUND).json({
            errors: {
                default: result.message
            }
        })
    }
    return res.status(StatusCodes.ACCEPTED).json(result)
}
