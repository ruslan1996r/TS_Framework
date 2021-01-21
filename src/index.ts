import "./assets/styles/style.css"
import "./babel"
// import { Log } from "./test"
abstract class User {
  constructor(public name: string) { }

  hello(): void {
    console.log(this.name)
  }

  abstract getName(): string
}

class Vovan extends User {
  name: string = 'Vova Putin'
  constructor(name: string) {
    super(name)
  }
  getName(): string {
    return this.name
  }
}

const vovan = new Vovan('TestVOva')
// console.log(vovan.getName())