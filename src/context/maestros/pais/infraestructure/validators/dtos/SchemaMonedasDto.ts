import * as Joi from 'joi'

export const SchemaMonedasDto = Joi.object().keys({
  moneda: Joi.string().required(),
  simbolo: Joi.string().required(),
})