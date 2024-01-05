import { BanderasDto, CodigoPostalDto, EscudoDto, MonedasDto } from './dtos'

export class EntityPais {
  codigo: string = ''
  nombre: string = ''
  nombreOficial: string = ''
  monedas: MonedasDto[] = []
  capital: string = ''
  region: string = ''
  banderas: BanderasDto = new BanderasDto()
  escudo: EscudoDto = new EscudoDto()
  codigoPostal: CodigoPostalDto = new CodigoPostalDto()
}