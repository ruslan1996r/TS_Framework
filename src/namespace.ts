// namespace ITest {
//   export interface Test_User {
//     name: String,
//     age: Number
//   }
// }



class NamespaceUser {
  static privet: (arg: number) => string
}

type CanHello = {
  canHallo: boolean
}

interface Test extends CanHello {
  age: number
}


interface ObjInter extends Test {
  name: string,
}

type UserAge = {
  age: number
}
type UserPrivet = {
  privet: () => string[]
}

type HelloType = UserAge & UserPrivet

export { NamespaceUser, ObjInter, HelloType }