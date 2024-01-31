import * as Joi from 'joi'

export const CodigoNombreSchema = Joi.object().keys({
  codigo: Joi.string().required(),
  nombre: Joi.string().required(),
})