import { iRepositoryMongo } from '../../../shared/domain/iRepositoryMongo'
import { EntityEmpresa } from './EntityEmpresa'

export interface iRepositoryUsuarios extends iRepositoryMongo<EntityEmpresa> { }