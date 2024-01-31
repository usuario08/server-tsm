import { AdapterToken } from '../../../shared/infraestructure'
import { RepositoryMongo } from '../../../shared/infraestructure/repository/mongo/repository'
import { DtoPayloadJWT } from '../domain/DtoPayloadJWT'
import { EntityUsuario } from '../domain/EntityUsuario'
import { iRepositoryUsuarios } from '../domain/iRepositoryMongo'

export class RepositoryUsuarios extends RepositoryMongo<EntityUsuario> implements iRepositoryUsuarios {
  generateJwt(payload: DtoPayloadJWT): { token: string } {
    const token = AdapterToken.createToken(payload)
    return { token }
  }
}