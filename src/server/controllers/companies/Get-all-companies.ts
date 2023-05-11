import { Request, Response } from 'express'
import * as yup from 'yup'
import { validation } from '../../shared/middlewares/Validation'
import { StatusCodes } from 'http-status-codes'

interface IQueryParams {
    page: number
    limit: number
    filter: string
}

export const getAllCompaniesValidation = validation((getSchema) => ({
    query: getSchema<IQueryParams>(
        yup.object().shape({
            page: yup.number().required().moreThan(0),
            limit: yup.number().required().moreThan(0),
            filter: yup.string().required()
        })
    )
}))

export const getAllCompanies = async (req: Request<{}, {}, IQueryParams>, res: Response) => {
    console.log(req.query)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('not implemented yet')
}
