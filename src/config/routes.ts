import { Router } from 'express'
import { UsersRoutes } from '../context/maestros/users/index'

export class AppRoutes {

  readonly router: Router

  constructor() {
    this.router = Router()
    this.exec()
  }

  private exec() {
    this.router.use('/users', new UsersRoutes().router)
  }

}