 import { Server } from './config/server'
import { env } from './config/env'
import { AppRoutes } from './config/routes'

const Bootstrap = () => {
  const appRoutes = new AppRoutes()
  new Server({ port: env.port, routes: appRoutes.router })
}

Bootstrap()