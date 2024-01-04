import { iRepositoryMongo } from '../../../shared/domain/iRepositoryMongo'
import { EntityUsuario } from './EntityUsuario'

export interface iRepositoryUsuarios extends iRepositoryMongo<EntityUsuario> { }