import { globSync } from 'glob'
import path from 'path'

export class InitDB {

  constructor() { }

  async exec() {
    await this.initializeBootstraps()
  }

  private async initializeBootstraps() {
    const paths = globSync('src/context/**/bootstrap.ts', { stat: true, withFileTypes: true })
    for await (const rute of paths) {
      const newPath = path.join('../', rute.fullpath().split('src')[1].replace('.ts', ''))
      const { ManagerEntity } = await import(newPath)
      const controller = new ManagerEntity()
      await controller.exec()
    }
  }

}