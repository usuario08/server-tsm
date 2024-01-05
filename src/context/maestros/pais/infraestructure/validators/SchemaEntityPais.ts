import * as Joi from 'joi'
import { SchemaMonedasDto } from './dtos/SchemaMonedasDto'
import { SchemaBanderasDto } from './dtos/SchemaBanderasDto'
import { SchemaEscudoDto } from './dtos/SchemaEscudoDto'
import { SchemaCodigoPostalDto } from './dtos/SchemaCodigoPostalDto'

export const PaisEntitySchema = Joi.object().keys({
  codigo: Joi.string().required(),
  nombre: Joi.string().required(),
  nombreOficial: Joi.string().required(),
  monedas: Joi.array().items(SchemaMonedasDto).min(1),
  capital: Joi.string().required(),
  region: Joi.string().required(),
  banderas: SchemaBanderasDto,
  escudo: SchemaEscudoDto,
  codigoPostal: SchemaCodigoPostalDto,
})