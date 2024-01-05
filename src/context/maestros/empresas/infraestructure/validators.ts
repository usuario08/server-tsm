import { NextFunction, Request, Response } from 'express'
import * as Joi from 'joi'
import { ValidationException } from '../../../../config/exception'

const UserCreateSchema = Joi.object().keys({
  identificacion: Joi.string().required(),
  password: Joi.string().required()
})

export function validarUserCreate(req: Request, _res: Response, next: NextFunction) {
  const { error } = UserCreateSchema.validate(req.body)
  if (error) throw new ValidationException(error.details[0].message)
  next()
}