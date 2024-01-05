import * as Joi from 'joi'

export const SchemaBanderasDto = Joi.object().keys({
  png: Joi.string().required(),
  svg: Joi.string().required(),
  alt: Joi.string().required(),
})