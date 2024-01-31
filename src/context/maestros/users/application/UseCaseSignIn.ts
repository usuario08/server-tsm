import { UnauthorizedException } from '../../../../config/exception'
import { DtoBodySignIn } from '../domain/DtoBodySignIn'
import { DtoResponseSignIn } from '../domain/DtoResponseSignIn'
import { RepositoryUsuarios } from '../infraestructure/repository'

export class UseCaseSignIn {
  private repository: RepositoryUsuarios

  constructor(_repository: RepositoryUsuarios) {
    this.repository = _repository
  }

  async exec(data: DtoBodySignIn): Promise<{ user: DtoResponseSignIn, token: string }> {

    const user = await this.repository.find({ identificacion: data.identificacion, estado: true })

    if (user.length !== 1) throw new UnauthorizedException(`¡Identificación o contraseña incorrectos!`)

    const {
      almacen,
      password,
      apellidoMaterno,
      apellidoPaterno,
      email,
      emailVerificado,
      identificacion,
      nombres,
      perfil,
      superUsuario
    } = user[0]

    if (password !== data.password) throw new UnauthorizedException(`¡Identificación o contraseña incorrectos!`)

    const token = 'test'

    return {
      user: {
        almacen,
        apellidoMaterno,
        apellidoPaterno,
        email,
        emailVerificado,
        identificacion,
        nombres,
        perfil,
        superUsuario,
      },
      token
    }

  }

}