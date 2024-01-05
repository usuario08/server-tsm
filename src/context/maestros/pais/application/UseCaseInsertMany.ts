import { EntityPais } from '../domain/EntityPais'
import { RepositoryPais } from '../infraestructure/repository'

export class UseCaseInsertMany {
  private repository: RepositoryPais

  constructor(_repository: RepositoryPais) {
    this.repository = _repository
  }

  async exec(documents: EntityPais[]): Promise<void> {

    await this.repository.insertMany(documents)

  }

}