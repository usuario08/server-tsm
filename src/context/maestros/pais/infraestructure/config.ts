import { env } from '../../../../config/env'

export const uri = env.mongodb_uri
export const database = env.mongodb_db
export const collection = 'Paises'
export const schema = 'maestro'
export const entity = 'Pais'

export const url_api_data_paises = 'https://restcountries.com/v3.1/subregion/'