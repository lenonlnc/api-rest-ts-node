import { Request, Response } from 'express'
import * as yup from 'yup'
import { validation } from '../../shared/middlewares/Validation'
import { StatusCodes } from 'http-status-codes'

interface IParamProps {
    id?: number
}
interface IBodyProps {
    name?: string
}

export const updateCompanyValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(
        yup.object().shape({
            name: yup.string().required()
        })
    ),
    params: getSchema<IParamProps>(
        yup.object().shape({
            id: yup.number().integer().required().moreThan(0)
        })
    )
}))

export const updateCompany = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
    console.log(req.params)
    console.log(req.body)

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('not implemented yet')
}
