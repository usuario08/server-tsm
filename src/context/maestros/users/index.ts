import { Router } from 'express'
import { NotFoundException } from '../../../config/exception'

export class UsersRoutes {

  readonly router: Router

  constructor() {
    this.router = Router()
    this.exec()
  }

  private exec() {
    this.router
      .post('/', () => { })
      .get('/', (_req, res) => {
        throw new NotFoundException(`test error dos teres`)
        res.send("Hola Mundo")
      })
  }
}