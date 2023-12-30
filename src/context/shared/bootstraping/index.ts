import { IIndex } from '../domain'
import { BootstrapingDataBaseMongo } from './database/mongodb'

export class Bootstraping {

  public databaseBootstrap: BootstrapingDataBaseMongo

  constructor(uri: string, database: string, collection: string, indexes: IIndex[]) {
    this.databaseBootstrap = new BootstrapingDataBaseMongo(uri, database, collection, indexes)
  }

  async exec() {
    await this.databaseBootstrap.exec()
  }

}