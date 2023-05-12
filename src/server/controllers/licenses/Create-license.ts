import { Request, Response } from 'express'
import * as yup from 'yup'
import { validation } from '../../shared/middlewares/Validation'
import { StatusCodes } from 'http-status-codes'
import { ILicense } from '../../database/models'
import { LicensesProvider } from '../../database/providers/licenses'

interface IBodyProps extends Omit<ILicense, 'id'> {}

export const createLicenseValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(
        yup.object().shape({
            number: yup.string().required(),
            environmental_agency: yup.string().required(),
            issued_at: yup.date().required(),
            validity: yup.date().required(),
            company_id: yup.number().required()
        })
    )
}))

export const createLicense = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
    const today = new Date()
    req.body.issued_at = today

    if (req.body.validity < req.body.issued_at) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            default: {
                message: 'A data de validade não pode ser anterior à data de criação'
            }
        })
    }
    const result = await LicensesProvider.create(req.body)

    if (result instanceof Error) {
        return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            errors: {
                default: result.message
            }
        })
    }
    return res.status(StatusCodes.OK).json()
}
