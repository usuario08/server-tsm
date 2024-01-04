import { Request, Response, Router } from 'express'
import { collection, database, entity, schema, uri } from './config'
import { RepositoryUsuarios } from './repository'
import { UseCaseInsertOne } from '../application/UseCaseInsertOne'

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
      .get(`/${schema}/${entity}`, async (_req, _res) => { })
      .post(`/${schema}/${entity}`, this.insertOne.bind(this))
  }

  private async insertOne(req: Request, res: Response) {
    const newDocument = await new UseCaseInsertOne(this._repo).exec(req.body)
    res.status(201).json(newDocument)
  }

}