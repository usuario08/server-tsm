import { IndexDescription, MongoClient } from 'mongodb'
import { IIndex, IIndexes } from '../../domain'
import { AdapterMongoDB } from '../../infraestructure'

export class BootstrapingDataBaseMongo {
  private uri: string
  private database: string
  private collection: string
  private indexes: IIndexes[]

  constructor(_uri: string, _database: string, _collection: string, indexes: IIndex[]) {
    this.uri = _uri
    this.database = _database
    this.collection = _collection
    this.indexes = []
    this.generateIndexes(indexes)
  }

  public async exec(): Promise<void> {
    await this.createCollection()
    if (this.indexes.length) await this.createIndexes()
  }

  private async createCollection(): Promise<void> {
    const client: MongoClient = await AdapterMongoDB.connect(this.uri)
    const db = client.db(this.database)
    const collections = await db.listCollections().toArray()
    if (collections.findIndex(col => col.name === this.collection) === -1)
      await db.createCollection(this.collection)
    await client.close()
  }

  private async createIndexes(): Promise<void> {
    const client: MongoClient = await AdapterMongoDB.connect(this.uri)
    const db = client.db(this.database)
    const col = db.collection(this.collection)

    const indexesExists: IndexDescription[] = await col.listIndexes().toArray()

    for (const row of this.indexes) {
      if (indexesExists.findIndex(idx => idx.name === row.name) !== -1)
        await col.createIndex(row.value, { name: row.name, ...row.opt })
    }

  }

  private generateIndexes(indexes: IIndex[]): void {
    for (const row of indexes) {
      this.indexes.push({
        name: row.nombre,
        value: row.campos.reduce((total, subrow) => {
          Object.assign(total, { [subrow.nombre]: subrow.direccion })
          return total
        }, {}),
        opt: row.opciones
      })
    }
  }

}