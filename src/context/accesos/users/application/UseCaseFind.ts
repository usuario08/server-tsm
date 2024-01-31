import { EntityUsuario } from '../domain/EntityUsuario'
import { RepositoryUsuarios } from '../infraestructure/repository'

export class UseCaseFind {
  private repository: RepositoryUsuarios

  constructor(_repository: RepositoryUsuarios) {
    this.repository = _repository
  }

  async exec(filter: Partial<EntityUsuario>): Promise<EntityUsuario[]> {

    return await this.repository.find(filter)

  }

}