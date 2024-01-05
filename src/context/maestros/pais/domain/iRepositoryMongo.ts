import { iRepositoryMongo } from '../../../shared/domain/iRepositoryMongo'
import { EntityPais } from './EntityPais'

export interface iRepositoryPais extends iRepositoryMongo<EntityPais> {
  getDataPaises(): Promise<any[]>
}