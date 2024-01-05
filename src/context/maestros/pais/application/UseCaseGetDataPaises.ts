import { RepositoryPais } from '../infraestructure/repository'

export class UseCaseGetDataPaises {
  private repository: RepositoryPais

  constructor(_repository: RepositoryPais) {
    this.repository = _repository
  }

  async exec(): Promise<any[]> {

    return await this.repository.getDataPaises()

  }

}