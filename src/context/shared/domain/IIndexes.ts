import { CreateIndexesOptions } from 'mongodb'

export interface IIndexes {
  name: string
  value: any
  opt: CreateIndexesOptions
}