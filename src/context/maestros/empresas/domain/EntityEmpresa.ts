import { CodigoNombreDto } from '../../../shared/domain'
import { DatosGeneralesDto } from './dtos'

export class EntityEmpresa {
  numeroDocumentoIdentidad: string = ''
  codigo: string = ''
  nombre: string = ''
  datosGenerales: DatosGeneralesDto = new DatosGeneralesDto()
  estado: boolean = true
  emailVerificado: boolean = false
}