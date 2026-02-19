// Start off with class decorator:
function frozen(constructor: Function) {
  console.log("This freeze decorator was invoked");
  // freeze the constructor, preventing extension:
  Object.freeze(constructor);
}

// used to specify if something is enumerable or not 
// In other words, determine if it shows up when iterating through properties of a given class
function enumerable(value: boolean):any {
  return function (
    target: any,
    propertyKey: string,
    descriptor?: PropertyDescriptor
  ) {
    // check and make sure we're applying this to a method
    if (!descriptor) {
      throw new Error("@enumerable can only be applied to a method")
    }
    // Set the enumerable property given the value that was passed in
    descriptor.enumerable = value;

  }
}



// apply this decorator, takes the same name as the function itself
@frozen
class Greeter {
  name: string;
  constructor (name: string) {
    console.log("The constructor was invoked");
    this.name = name;
  }

  // simple method that prints a hello message given our name:
  @enumerable(true)
  greet() {
    console.log("Hello, " + this.name)
  }
}

let g = new Greeter("Bill");
g.greet();

console.log("Enumerable:");
for(let prop in g) {
  console.log(prop);
}