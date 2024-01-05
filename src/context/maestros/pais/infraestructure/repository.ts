import { RepositoryMongo } from '../../../shared/infraestructure/repository/mongo/repository'
import { EntityPais } from '../domain/EntityPais'
import { iRepositoryPais } from '../domain/iRepositoryMongo'

export class RepositoryPais extends RepositoryMongo<EntityPais> implements iRepositoryPais {

  async getDataPaises(): Promise<any[]> {

  }

}