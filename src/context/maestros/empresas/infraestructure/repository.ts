import { RepositoryMongo } from '../../../shared/infraestructure/repository/mongo/repository'
import { EntityEmpresa } from '../domain/EntityEmpresa'
import { iRepositoryUsuarios } from '../domain/iRepositoryMongo'

export class RepositoryUsuarios extends RepositoryMongo<EntityEmpresa> implements iRepositoryUsuarios { }