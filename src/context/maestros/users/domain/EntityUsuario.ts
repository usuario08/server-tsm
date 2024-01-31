import { CodigoNombreDto } from '../../../shared/domain'

export class EntityUsuario {
  identificacion: string = ''
  password: string = ''
  nombres: string = ''
  apellidoPaterno: string = ''
  apellidoMaterno: string = ''
  email: string = ''
  perfil: CodigoNombreDto = new CodigoNombreDto()
  estado: boolean = true
  emailVerificado: boolean = false
  superUsuario: boolean = false
  almacen: CodigoNombreDto[] = []
}