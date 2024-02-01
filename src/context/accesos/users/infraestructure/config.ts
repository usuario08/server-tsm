import { env } from '../../../../config/env'

export const uri = env.mongodb_uri
export const database = env.mongodb_db
export const collection = 'Usuarios'
export const schema = 'acceso'
export const entity = 'Usuario'