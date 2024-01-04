import { Document, Filter, OptionalId } from 'mongodb'

export interface iRepositoryMongo<T> {
  saveOne(doc: OptionalId<T>): Promise<T | null>
  find(filter: Filter<Document>): Promise<T[]>
} 