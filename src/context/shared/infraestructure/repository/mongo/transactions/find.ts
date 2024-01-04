import { Collection, Document, Filter } from 'mongodb'

export async function findDocuments<T extends Document>(collection: Collection<T>, filter: Filter<Document>) {
  return await collection.find<T>(filter).toArray()
}