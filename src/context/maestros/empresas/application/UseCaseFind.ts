import { EntityEmpresa } from '../domain/EntityEmpresa'
import { RepositoryUsuarios } from '../infraestructure/repository'

export class UseCaseFind {
  private repository: RepositoryUsuarios

  constructor(_repository: RepositoryUsuarios) {
    this.repository = _repository
  }

  async exec(filter: Partial<EntityEmpresa>): Promise<EntityEmpresa[]> {

    return await this.repository.find(filter)

  }

}