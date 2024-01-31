import { UnauthorizedException } from '../../../../config/exception'
import { DtoReqSignIn } from '../domain/DtoReqSignIn'
import { DtoResSignIn } from '../domain/DtoResSignIn'
import { RepositoryUsuarios } from '../infraestructure/repository'

export class UseCaseSignIn {
  private repository: RepositoryUsuarios

  constructor(_repository: RepositoryUsuarios) {
    this.repository = _repository
  }

  async exec(data: DtoReqSignIn): Promise<{ user: DtoResSignIn, token: string }> {

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

    const { token } = this.repository.generateJwt({ identificacion, apellidoMaterno, apellidoPaterno, email, nombres, perfil, superUsuario })

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