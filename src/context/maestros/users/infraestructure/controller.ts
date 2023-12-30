import { Request, Response, Router } from 'express'
import { NotFoundException } from '../../../../config/exception'
import { entity, schema } from './config'

export class Controller {

  readonly router: Router

  constructor() {
    this.router = Router()
    this.exec()
  }

  private exec() {   
    this.router
      .get(`/${schema}/${entity}`, async (_req, _res) => { })
      .post(`/${schema}/${entity}`, this.insertOne)
  }

  private async insertOne(_req: Request, res: Response) {
    throw new NotFoundException(`test error`)
    res.send('Hola Mundo')
  }

}