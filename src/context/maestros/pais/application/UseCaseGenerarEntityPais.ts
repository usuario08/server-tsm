import { EntityPais } from '../domain/EntityPais'

export class UseCaseGenerarEntityPais {

  exec(data: any[]): EntityPais[] {

    return data.reduce((acc, item) => {
      const newPais = new EntityPais()
      newPais.codigo = item.cca2
      newPais.nombre = item.translations.spa.common
      newPais.nombreOficial = item.translations.spa.official
      newPais.monedas = Object.keys(item.currencies).map((codigo) => ({
        moneda: codigo,
        simbolo: item.currencies[codigo].symbol
      }))
      newPais.capital = item.capital[0]
      newPais.region = item.region
      newPais.banderas.png = item.flags.png
      newPais.banderas.svg = item.flags.svg
      newPais.escudo.png = item.coatOfArms.png
      newPais.escudo.svg = item.coatOfArms.svg
      if (item.postalCode?.format)
        newPais.codigoPostal.formato = item.postalCode.format
      if (item.postalCode?.regex)
        newPais.codigoPostal.regex = item.postalCode.regex
      return [...acc, newPais]
    }, [])

  }

}