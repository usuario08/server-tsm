import { Request, Response, Router } from 'express'
import { collection, database, entity, schema, uri } from './config'
import { RepositoryUsuarios } from './repository'
import { UseCaseInsertOne } from '../application/UseCaseInsertOne'
import { UseCaseFind } from '../application/UseCaseFind'
import { validarUserCreate } from './validators'

export class Controller {

  readonly router: Router
  private _repo: RepositoryUsuarios

  constructor() {
    this.router = Router()
    this._repo = new RepositoryUsuarios(uri, database, collection)
    this.exec()
  }

  private exec() {
    this.router
      .get(`/${schema}/${entity}`, this.find.bind(this))
      .post(`/${schema}/${entity}`, validarUserCreate, this.insertOne.bind(this))
  }

  private async find(req: Request, res: Response) {
    const documents = await new UseCaseFind(this._repo).exec(req.body)
    res.status(200).json(documents)
  }

  private async insertOne(req: Request, res: Response) {
    const newDocument = await new UseCaseInsertOne(this._repo).exec(req.body)
    res.status(201).json(newDocument)
  }

}