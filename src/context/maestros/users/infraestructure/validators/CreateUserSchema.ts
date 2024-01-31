import * as Joi from 'joi'
import { CodigoNombreSchema } from '../../../../shared/infraestructure/validators'

export const UserCreateSchema = Joi.object().keys({
  identificacion: Joi.string().required(),
  password: Joi.string().required(),
  nombres: Joi.string().required(),
  apellidoPaterno: Joi.string().required(),
  apellidoMaterno: Joi.string().required(),
  email: Joi.string().required(),
  perfil: CodigoNombreSchema.required(),
  almacen: Joi.array().required()
})