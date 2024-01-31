import * as Joi from 'joi'

export const SignInSchema = Joi.object().keys({
  identificacion: Joi.string().required(),
  password: Joi.string().required(),
})