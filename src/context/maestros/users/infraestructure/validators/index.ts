import { NextFunction, Request, Response } from 'express'
import { ValidationException } from '../../../../../config/exception'
import { UserCreateSchema } from './CreateUserSchema'

export function validarUserCreate(req: Request, _res: Response, next: NextFunction) {
    const { error } = UserCreateSchema.validate(req.body)
    if (error) throw new ValidationException(error.details[0].message)
    next()
}