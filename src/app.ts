import { InitDB } from './config/db'
import { Server } from './config/server'
import { env } from './config/env'
import { AppRoutes } from './config/routes'

const Bootstrap = async () => {
  await new InitDB().exec()
  const appRoutes = new AppRoutes()
  await appRoutes.exec()
  new Server({ port: env.port, routes: appRoutes.router })
}

Bootstrap()