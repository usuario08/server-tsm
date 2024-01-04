import { EntityUsuario } from '../domain/EntityUsuario'
import { RepositoryUsuarios } from '../infraestructure/repository'

export class UseCaseInsertOne {
  private repository: RepositoryUsuarios

  constructor(_repository: RepositoryUsuarios) {
    this.repository = _repository
  }

  async exec(data: EntityUsuario): Promise<EntityUsuario> {
    const document: EntityUsuario = {
      identificacion: data.identificacion
    }
    const newDocument = await this.repository.saveOne(document)
    if (!newDocument) throw Error('')
    return newDocument
  }
}