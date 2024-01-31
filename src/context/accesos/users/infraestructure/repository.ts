import { RepositoryMongo } from '../../../shared/infraestructure/repository/mongo/repository'
import { DtoPayloadJWT } from '../domain/DtoPayloadJWT'
import { EntityUsuario } from '../domain/EntityUsuario'
import { iRepositoryUsuarios } from '../domain/iRepositoryMongo'

export class RepositoryUsuarios extends RepositoryMongo<EntityUsuario> implements iRepositoryUsuarios {
  generateJwt(_payload: DtoPayloadJWT): { token: string } {
    return { token: 'test_token' }
  }
}