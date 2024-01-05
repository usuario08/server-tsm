import { AdapterApiRequest } from '../../../shared/infraestructure'
import { RepositoryMongo } from '../../../shared/infraestructure/repository/mongo/repository'
import { EntityPais } from '../domain/EntityPais'
import { iRepositoryPais } from '../domain/iRepositoryMongo'
import { url_api_data_paises } from './config'

export class RepositoryPais extends RepositoryMongo<EntityPais> implements iRepositoryPais {

  async getDataPaises(): Promise<any[]> {

    const southAmericaPromise = new AdapterApiRequest().get(`${url_api_data_paises}South America`)
    const centralAmericaPromise = new AdapterApiRequest().get(`${url_api_data_paises}Central America`)

    const [data, data1] = await Promise.all([southAmericaPromise, centralAmericaPromise])

    return data.concat(data1)
  }

}