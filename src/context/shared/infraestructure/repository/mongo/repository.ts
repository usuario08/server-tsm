import { Document, Filter, OptionalId } from 'mongodb'
import { iRepositoryMongo } from '../../../domain/iRepositoryMongo'
import { AdapterMongoDB } from '../../adapter'
import { createDocument } from './transactions/insertOne'
import { findDocuments } from './transactions/find'
import { createDocuments } from './transactions/insertMany'

export class RepositoryMongo<T extends Document> implements iRepositoryMongo<T>{

  protected database: string
  protected collection: string
  protected uri: string

  constructor(uri: string, database: string, collection: string) {
    this.database = database
    this.collection = collection
    this.uri = uri
  }

  // async insertOne(doc: OptionalId<T>) {
  //   const mongoClient = await AdapterMongoDB.connect(this.uri)
  //   const session = mongoClient.startSession()
  //   try {

  //     session.startTransaction()

  //     const db = mongoClient.db(this.database)
  //     const collection = db.collection(this.collection)

  //     console.log(`CREATE ${this.collection}`)
  //     const resultInsert = await createDocument<T>(collection, doc, session)
  //     const newDoc = await collection.findOne<T>({ _id: resultInsert.insertedId }, { session })
  //     await session.commitTransaction()
  //     return newDoc
  //   } catch (error) {
  //     await session.abortTransaction()
  //     throw error
  //   } finally {
  //     await session.endSession()
  //     await mongoClient.close()
  //   }
  // }

  async insertOne(doc: OptionalId<T>) {
    const mongoClient = await AdapterMongoDB.connect(this.uri)
    try {

      const db = mongoClient.db(this.database)
      const collection = db.collection(this.collection)

      console.log(`CREATE ${this.collection}`)
      const resultInsert = await createDocument<T>(collection, doc)
      const newDoc = await collection.findOne<T>({ _id: resultInsert.insertedId })
      return newDoc
    } catch (error) {
      throw error
    } finally {
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

  async insertMany(docs: OptionalId<T>[]) {

    const mongoClient = await AdapterMongoDB.connect(this.uri)

    try {
      const database = mongoClient.db(this.database)
      const collection = database.collection(this.collection)

      const result = await createDocuments<T>(collection, docs)   
      console.log(`${result.insertedCount} documents were inserted`)
    } catch (error) {
      throw error
    } finally {
      await mongoClient.close()
    }
  }

}