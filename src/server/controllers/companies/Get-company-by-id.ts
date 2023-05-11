import { Request, Response } from 'express'
import * as yup from 'yup'
import { validation } from '../../shared/middlewares/Validation'
import { StatusCodes } from 'http-status-codes'

interface IParamProps {
    id?: number
}

export const getCompanyByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(
        yup.object().shape({
            id: yup.number().integer().required().moreThan(0)
        })
    )
}))

export const getCompanyById = async (req: Request<IParamProps>, res: Response) => {
    console.log(req.params)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('not implemented yet')
}
