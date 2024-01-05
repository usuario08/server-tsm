import { EntityPais } from '../domain/EntityPais'
import { RepositoryPais } from '../infraestructure/repository'

export class UseCaseFind {
  private repository: RepositoryPais

  constructor(_repository: RepositoryPais) {
    this.repository = _repository
  }

  async exec(filter: Partial<EntityPais>): Promise<EntityPais[]> {

    return await this.repository.find(filter)

  }

}