import { UnprocessableException } from '../../../../config/exception'
import { EntityEmpresa } from '../domain/EntityEmpresa'
import { RepositoryUsuarios } from '../infraestructure/repository'

export class UseCaseInsertOne {
  private repository: RepositoryUsuarios

  constructor(_repository: RepositoryUsuarios) {
    this.repository = _repository
  }

  async exec(_data: EntityEmpresa): Promise<EntityEmpresa> {

    const document: EntityEmpresa = new EntityEmpresa()

    const newDocument = await this.repository.insertOne(document)

    if (!newDocument) throw new UnprocessableException('La entidad no se puede procesar')

    return newDocument

  }

}