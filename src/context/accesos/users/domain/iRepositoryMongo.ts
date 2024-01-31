import { iRepositoryMongo } from '../../../shared/domain/iRepositoryMongo'
import { DtoPayloadJWT } from './DtoPayloadJWT';
import { EntityUsuario } from './EntityUsuario'

export interface iRepositoryUsuarios extends iRepositoryMongo<EntityUsuario> {
  generateJwt(payload: DtoPayloadJWT): { token: string }
}