import * as Joi from 'joi'

export const SchemaCodigoPostalDto = Joi.object().keys({
  formato: Joi.string().required(),
  regex: Joi.string().required(),
})