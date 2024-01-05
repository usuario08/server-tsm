import { ValidationException } from '../../../../../config/exception'
import { EntityPais } from '../../domain/EntityPais'
import { PaisEntitySchema } from './SchemaEntityPais'

export function validarPaisCreate(data: EntityPais) {
  const { error } = PaisEntitySchema.validate(data)
  if (error) throw new ValidationException(error.details[0].message)
}