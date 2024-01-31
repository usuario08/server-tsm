import { get } from 'env-var'

export const env = {
  port: get('PORT').required().asPortNumber(),
  mongodb_uri: get('MONGODB_URI').required().asString(),
  mongodb_db: get('MONGODB_DB').required().asString(),
  jwt_key: get('JWT_KEY').required().asString(),
  jwt_exp: get('JWT_EXP').required().asIntPositive(),
}