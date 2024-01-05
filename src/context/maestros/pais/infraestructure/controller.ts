import { Request, Response, Router } from 'express'
import { collection, database, entity, schema, uri } from './config'
import { RepositoryPais } from './repository'
import { UseCaseInsertMany } from '../application/UseCaseInsertMany'
import { UseCaseFind } from '../application/UseCaseFind'
import { UseCaseGetDataPaises } from '../application/UseCaseGetDataPaises'
import { UseCaseGenerarEntityPais } from '../application/UseCaseGenerarEntityPais'
import { validarPaisCreate } from './validators/validators'

export class Controller {

  readonly router: Router
  private _repo: RepositoryPais

  constructor() {
    this.router = Router()
    this._repo = new RepositoryPais(uri, database, collection)
    this.exec()
  }

  private exec() {
    this.router
      .get(`/${schema}/${entity}`, this.find.bind(this))
      .post(`/${schema}/${entity}`, this.insertMany.bind(this))
  }

  private async find(req: Request, res: Response) {
    const documents = await new UseCaseFind(this._repo).exec(req.body)
    res.status(200).json(documents)
  }

  private async insertMany(_req: Request, res: Response) {
    const dataPaises = await new UseCaseGetDataPaises(this._repo).exec()
    const entities = new UseCaseGenerarEntityPais().exec(dataPaises)
    entities.forEach(e => validarPaisCreate(e))
    const newDocument = await new UseCaseInsertMany(this._repo).exec(entities)
    res.status(201).json(newDocument)
  }

}