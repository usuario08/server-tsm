import { get } from 'env-var'

export const env = {
  port: get('PORT').required().asPortNumber(),
  mongodb_uri: get('MONGODB_URI').required().asString(),
  mongodb_db: get('MONGODB_DB').required().asString(),
}