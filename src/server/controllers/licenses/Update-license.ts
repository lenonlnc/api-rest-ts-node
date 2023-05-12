import { Request, Response } from 'express'
import * as yup from 'yup'
import { validation } from '../../shared/middlewares/Validation'
import { StatusCodes } from 'http-status-codes'
import { ILicense } from '../../database/models'
import { LicensesProvider } from '../../database/providers/licenses'

interface IParamProps {
    id?: number
}
interface IBodyProps extends Omit<ILicense, 'id'> {}

export const updateLicenseValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(
        yup.object().shape({
            number: yup.string().required(),
            environmental_agency: yup.string().required(),
            issued_at: yup.date().required(),
            validity: yup.date().required(),
            company_id: yup.number().required()
        })
    ),
    params: getSchema<IParamProps>(
        yup.object().shape({
            id: yup.number().integer().required().moreThan(0)
        })
    )
}))

export const updateLicense = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
    const today = new Date()
    req.body.issued_at = today

    if (req.body.validity < req.body.issued_at) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            default: {
                message: 'A data de validade não pode ser anterior à data de criação'
            }
        })
    }
    const result = await LicensesProvider.updateLicense(req.params.id!, req.body)

    if (result instanceof Error) {
        return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            errors: {
                default: result.message
            }
        })
    }
    return res.status(StatusCodes.OK).json(result)
}
