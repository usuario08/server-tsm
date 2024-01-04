import { Document, Filter, OptionalId } from 'mongodb'
import { iRepositoryMongo } from '../../../domain/iRepositoryMongo'
import { AdapterMongoDB } from '../../adapter'
import { createDocument } from './transactions/insertOne'
import { findDocuments } from './transactions/find'

export class RepositoryMongo<T extends Document> implements iRepositoryMongo<T>{

  protected database: string
  protected collection: string
  protected uri: string

  constructor(uri: string, database: string, collection: string) {
    this.database = database
    this.collection = collection
    this.uri = uri
  }

  async saveOne(doc: OptionalId<T>) {
    const mongoClient = await AdapterMongoDB.connect(this.uri)
    const session = mongoClient.startSession()
    try {

      session.startTransaction()

      const db = mongoClient.db(this.database)
      const collection = db.collection(this.collection)

      console.log(`CREATE ${this.collection}`)
      const resultInsert = await createDocument<T>(collection, doc, session)
      const newDoc = await collection.findOne<T>({ _id: resultInsert.insertedId }, { session })
      await session.commitTransaction()
      return newDoc
    } catch (error) {
      await session.abortTransaction()
      throw error
    } finally {
      await session.endSession()
      await mongoClient.close()
    }
  }

  async find(filter: Filter<Document>) {

    const mongoClient = await AdapterMongoDB.connect(this.uri)

    try {

      const db = mongoClient.db(this.database)
      const collection = db.collection<T>(this.collection)

      return await findDocuments<T>(collection, filter)
    } catch (error) {
      throw error
    } finally {
      await mongoClient.close()
    }
  }

}