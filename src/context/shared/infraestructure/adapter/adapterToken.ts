import { sign, verify } from 'jsonwebtoken'
import { env } from '../../../../config/env'

export class AdapterToken {

  static createToken(payload: any) {
    const token = sign(payload, env.jwt_key, { expiresIn: env.jwt_exp * 60 * 60 })
    return token
  }

  static verifyToken(token: string) {
    try {
      const data = verify(token, env.jwt_key)
      return data
    } catch (error) {
      return null
    }
  }
  
}