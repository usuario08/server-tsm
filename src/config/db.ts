import { ManagerEntity } from '../context/maestros/users/bootstrap'

export class InitDB {

  constructor() { }

  async exec() {
    await new ManagerEntity().exec()
  }
  
}