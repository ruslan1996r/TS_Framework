interface Putin {
  name: "Vova"
}

declare class MyUser {
  private testHello: string
  public putin: Putin
  getHello(arg: string): void
}

declare module Testtt {
  export type Privet = string
}

// export { MyUser as default }
export { Testtt }