import { Router } from 'express'
import { globSync } from 'glob'
import path from 'path'

export class AppRoutes {

  readonly router: Router
  private managers: any[] = []

  constructor() {
    this.router = Router()
  }

  async exec() {
    await this.initializeControllers()
    this.handleRoutes()
  }

  private async initializeControllers() {

    const paths = globSync('src/context/**/controller.ts', { stat: true, withFileTypes: true })

    for await (const rute of paths) {
      const newPath = path.join('../', rute.fullpath().split('src')[1].replace('.ts', ''))
      const { Controller } = await import(newPath)
      this.managers.push(new Controller())
    }
  }

  private handleRoutes() {
    for (const manager of this.managers) {
      this.router.use(manager.router)
    }
  }

}