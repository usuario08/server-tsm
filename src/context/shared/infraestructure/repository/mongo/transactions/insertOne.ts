import { Collection, OptionalId } from 'mongodb'

export async function createDocument<T>(collection: Collection, doc: OptionalId<T>) {
  return await collection.insertOne(doc)
}
// export async function createDocument<T>(collection: Collection, doc: OptionalId<T>, session: ClientSession) {
//   return await collection.insertOne(doc, { session })
// }