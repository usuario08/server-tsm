import express, { Request, Response, NextFunction, Router } from 'express'
import { BaseException, InternalServerException } from './exception'
import { showConsole } from 'color-consola-node'
import 'express-async-errors'

interface Options {
  port?: number
  routes: Router
}

export class Server {

  public readonly app = express()
  private readonly port: number = 3001
  private readonly routes: Router

  constructor({ port = 3001, routes }: Options) {
    this.port = port
    this.routes = routes
    this.start()
  }

  private start() {
    this.configDataType()
    this.configRoutes()
    this.configError()
    this.app.listen(
      this.port,
      () => showConsole(`Servidor iniciado en el puerto ${this.port}`, 'green')
    )
  }

  private configDataType() {
    this.app.use(express.json())
  }

  private configRoutes() {
    this.app.use('/api', this.routes)
  }

  private configError() {
    this.app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
      console.error(err.stack)
      if (err instanceof BaseException) {
        return res.status(err.statusCode).json(err)
      }
      if (err) {
        return res.status(500).json(new InternalServerException(err.message))
      }
      return next()
    })
  }

}
