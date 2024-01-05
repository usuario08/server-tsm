import { iRepositoryMongo } from '../../../shared/domain/iRepositoryMongo'
import { EntityUsuario } from './EntityEmpresa'

export interface iRepositoryUsuarios extends iRepositoryMongo<EntityUsuario> { }