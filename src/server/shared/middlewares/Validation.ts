import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { Schema, ValidationError } from 'yup'

type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler
type TProperty = 'body' | 'header' | 'params' | 'query'

type TAllSchemas = Record<TProperty, Schema<any>>

export const validation: TValidation = (schemas) => (req, res, next) => {
    const errorsResult: Record<string, Record<string, string>> = {}

    Object.entries(schemas).forEach(async ([key, schema]) => {
        try {
            schema.validateSync(req[key as TProperty], { abortEarly: false })
            // return next()
        } catch (e) {
            const error = e as ValidationError
            const errors: Record<string, string> = {}

            error.inner.forEach((e) => {
                if (!e.path) {
                    return
                }

                errors[e.path] = e.message
            })

            errorsResult[key] = errors
        }
    })

    if (Object.entries(errorsResult).length === 0) {
        return next()
    }
    return res.status(StatusCodes.BAD_GATEWAY).json({ errors: errorsResult })
}
