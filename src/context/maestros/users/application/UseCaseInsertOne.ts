import { UnprocessableException } from '../../../../config/exception'
import { EntityUsuario } from '../domain/EntityUsuario'
import { RepositoryUsuarios } from '../infraestructure/repository'

export class UseCaseInsertOne {
  private repository: RepositoryUsuarios

  constructor(_repository: RepositoryUsuarios) {
    this.repository = _repository
  }

  async exec(data: EntityUsuario): Promise<EntityUsuario> {

    const document: EntityUsuario = new EntityUsuario()
    document.identificacion = data.identificacion
    document.password = data.password
    document.nombres = data.nombres
    document.apellidoPaterno = data.apellidoPaterno
    document.apellidoMaterno = data.apellidoMaterno
    document.email = data.email
    document.perfil.codigo = data.perfil.codigo
    document.perfil.nombre = data.perfil.nombre
    document.almacen = data.almacen

    const newDocument = await this.repository.insertOne(document)

    if (!newDocument) throw new UnprocessableException('La entidad no se puede procesar')

    return newDocument

  }

}