import { Request, Response, Router } from 'express'
import { collection, database, entity, schema, uri } from './config'
import { RepositoryUsuarios } from './repository'
import { UseCaseInsertOne } from '../application/UseCaseInsertOne'
import { UseCaseFind } from '../application/UseCaseFind'
import { validarSignIn, validarUserCreate } from './validators'
import { UseCaseSignIn } from '../application/UseCaseSignIn'

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
      .post(`/${schema}/${entity}/sign_in`, validarSignIn, this.signIn.bind(this))
  }

  private async find(req: Request, res: Response) {
    const documents = await new UseCaseFind(this._repo).exec(req.body)
    res.status(200).json(documents)
  }

  private async insertOne(req: Request, res: Response) {
    const newDocument = await new UseCaseInsertOne(this._repo).exec(req.body)
    res.status(201).json(newDocument)
  }

  private async signIn(req: Request, res: Response) {
    const response = await new UseCaseSignIn(this._repo).exec(req.body)
    res.cookie('auth', response.token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: true
    })
    res.status(200).json(response.user)
  }

}