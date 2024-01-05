import { Document, Filter, OptionalId } from 'mongodb'

export interface iRepositoryMongo<T> {
  insertOne(doc: OptionalId<T>): Promise<T | null>
  find(filter: Filter<Document>): Promise<T[]>
  insertMany(docs: OptionalId<T>[]): Promise<void>
} 