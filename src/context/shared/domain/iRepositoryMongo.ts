import { OptionalId } from 'mongodb'

export interface iRepositoryMongo<T> {
  saveOne(doc: OptionalId<T>): Promise<T | null>
} 