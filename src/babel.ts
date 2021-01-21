import 'reflect-metadata';

class Person {
  @Age(18, 60)
  age: number = 50;
  name: string = 'Putin'

  getAge() {
    console.log(this.age)
  }
}

declare type PropertyDecorator =
  (target: Object, propertyKey: string | symbol) => void;

function Age(from: number, to: number) {
  return function (object: Object, propertyName: string) {
    const metadata = {
      propertyName: propertyName,
      range: { from, to },
    };
    Reflect.defineMetadata(`validationMetadata_${propertyName}`, metadata, object.constructor);
  };
}

function validate<T extends Object>(object: T) {
  const properties = Object.getOwnPropertyNames(object);
  properties.forEach(propertyName => {
    console.log("propertyName", Reflect.getMetadata(`validationMetadata_${propertyName}`, object.constructor))
  })
  // console.log('CLASS: ', object)
}
// function validate<T>(object: T) {
//   const properties = Object.getOwnPropertyNames(object);
//   properties.forEach(propertyName => {
//     let metadata = Reflect.getMetadata(metaKey + propertyName, object.constructor);
//     if (metadata && metadata.range) {
//       const value: any = object[metadata.propertyName];
//       if (value < metadata.range.from || value > metadata.range.to) {
//         throw new Error('Validation failed');
//       }
//     }
//   });
// }


const person = new Person();
person.age = 40;
validate(person);
// // > validation passed

// person.age = 16;
// validate(person);