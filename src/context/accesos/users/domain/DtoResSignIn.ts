import { CodigoNombreDto } from '../../../shared/domain'

export interface DtoResSignIn {
  identificacion: string
  nombres: string
  apellidoPaterno: string
  apellidoMaterno: string
  email: string
  perfil: CodigoNombreDto
  emailVerificado: boolean
  superUsuario: boolean
  almacen: CodigoNombreDto[]
}