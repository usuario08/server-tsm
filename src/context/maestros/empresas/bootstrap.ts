import { IIndex } from '../../shared/domain'
import { uri } from '../../shared/infraestructure'
import { Bootstraping } from '../../shared/bootstraping'
import { collection, database } from './infraestructure'
import { showConsole } from 'color-consola-node'

export class ManagerEntity {

  private url: string = uri
  private database: string = database
  private collection: string = collection
  private indexes: IIndex[] = [
    {
      nombre: `${this.database}-${this.collection}-key`,
      campos: [
        { nombre: 'identificacion', direccion: 1 }
      ],
      opciones: { unique: true }
    }
  ]
  private bootstrap: Bootstraping

  constructor() {
    this.bootstrap = new Bootstraping(this.url, this.database, this.collection, this.indexes)
  }

  async exec() {
    showConsole(`Configurar la colección ${this.collection} de la base de datos ${this.database}`, 'blue')
    await this.bootstrap.exec()
    showConsole(`Configurar la colección ${this.collection} de la base de datos ${this.database}`, 'blue')
  }

}