import { RepositoryMongo } from '../../../shared/infraestructure/repository/mongo/repository'
import { EntityUsuario } from '../domain/EntityUsuario'
import { iRepositoryUsuarios } from '../domain/iRepositoryMongo'

export class RepositoryUsuarios extends RepositoryMongo<EntityUsuario> implements iRepositoryUsuarios { }