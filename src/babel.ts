async function start(): Promise<string> {
  return await Promise.resolve('async is working')
}

// function Log(constructor: Function) {
//   console.log("Log_1; constructor: ", constructor)
// }

start().then(console.log)

// @Log
class Util {
  static id: string = 'testIdAWDJU8AW9IDOKKAWKD'
}
console.log("Util_ID", Util.id)