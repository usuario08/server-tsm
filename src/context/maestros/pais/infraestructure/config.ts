import { env } from '../../../../config/env'

export const uri = env.mongodb_uri
export const database = env.mongodb_db
export const collection = 'Paises'
export const schema = 'maestro'
export const entity = 'Pais'