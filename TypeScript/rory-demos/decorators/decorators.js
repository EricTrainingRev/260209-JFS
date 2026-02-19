var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Start off with class decorator:
function frozen(constructor) {
    console.log("This freeze decorator was invoked");
    // freeze the constructor, preventing extension:
    Object.freeze(constructor);
}
// used to specify if something is enumerable or not 
// In other words, determine if it shows up when iterating through properties of a given class
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        // check and make sure we're applying this to a method
        if (!descriptor) {
            throw new Error("@enumerable can only be applied to a method");
        }
        // Set the enumerable property given the value that was passed in
        descriptor.enumerable = value;
    };
}
// apply this decorator, takes the same name as the function itself
let Greeter = class Greeter {
    constructor(name) {
        console.log("The constructor was invoked");
        this.name = name;
    }
    // simple method that prints a hello message given our name:
    greet() {
        console.log("Hello, " + this.name);
    }
};
__decorate([
    enumerable(true)
], Greeter.prototype, "greet", null);
Greeter = __decorate([
    frozen
], Greeter);
let g = new Greeter("Bill");
g.greet();
console.log("Enumerable:");
for (let prop in g) {
    console.log(prop);
}
