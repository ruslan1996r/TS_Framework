
class Component {
  public hello = "hello, gena!"
}
const ComponentProxy = new Proxy(Component, {
  construct(target: any, args: any) {
    return new Proxy(new target(...args), {
      get(targ: any, prop: any) {
        console.log(`Getting prop ${prop}`);
        return targ[prop];
      },
      set(
        target: any,
        property: string | number | symbol,
        value: any,
        receiver: any
      ): boolean {
        console.log("target", target)
        console.log("property", property)
        console.log("value", value)
        console.log("receiver", receiver)
        return true
      }
    })
  }
})

export { ComponentProxy }