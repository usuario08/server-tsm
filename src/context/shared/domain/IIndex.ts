import { CreateIndexesOptions } from 'mongodb'

export interface IIndex { 
  nombre: string
  campos: ICampos[]
  opciones: CreateIndexesOptions
}

interface ICampos { 
  nombre: string
  direccion: number
}