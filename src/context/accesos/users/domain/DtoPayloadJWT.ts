import { CodigoNombreDto } from '../../../shared/domain'

export interface DtoPayloadJWT {
  identificacion: string
  nombres: string
  apellidoPaterno: string
  apellidoMaterno: string
  email: string
  perfil: CodigoNombreDto
  superUsuario: boolean
}