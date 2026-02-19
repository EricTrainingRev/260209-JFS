// When we define the function, we use Generics to indicate that this type 
// will be defined later on, when we invoke the function
// So that way, we keep the function generic and accepting of different types while
// also keeping the types within the function consistent 
// (ex: we couldn't pass in a string and return a number)
function identity<T> (value: T): T{
  return value;
}

let s:string = identity<string>("Hello World");
console.log(s);

// Generic Class
class Box<T> {
  constructor(public value: T) {}
}

let numberBox = new Box<number>(3);
let stringBox = new Box<string>("cat");

// Arrays:
let grades:number[] = [98,81,78,90];
grades.push(100);
// grades.push("FAIL");

// this array lets us add strings and numbers but no other types
let grades2:(number | string)[] = [70, "cat"]