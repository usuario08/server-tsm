import { Collection, OptionalId } from 'mongodb'

export async function createDocuments<T>(collection: Collection, docs: OptionalId<T>[]) {
  return await collection.insertMany(docs, { ordered: true })
}