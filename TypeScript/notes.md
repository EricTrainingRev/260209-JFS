# TS Notes
TypeScript is a superset of JavaScript: anything that you can do in JavaScript is legal for Typescript, but with TypeScript you get the benefit of a myriad of compile-time checks for your code. Typically these checks are in place to provide type safety and type definition for your code

## QC 
- Should just cover Spring, nothing from this week
  - Verbal, live, sort of like a mock interview
- 2 QC exams Multiple Choice
  - Take on Rev Pro

## Classes
- TypeScript supports class-based object-oriented programming
  - Constructors - used to create an instance
  - Fields
  - Methods
  - Access Modifiers (public,private)
  - Read-Only
  - Inheritance
- Syntax:
```ts
class Animal {
  constructor(public name: string) {}

  speak() {
    console.log("The animal is speaking");
  }
}
```

## Generics
- Allow us to write reusable, type-safe code that work with multiple data types
- Instead of using "any" (which doesn't include type safety), we can parameterize types, specify them later on
- The following line of code works but "any" doesn't provide type-safety
```typescript
function identity(value: any): any {
  return value;
}
```

- With Generics:
```typescript
function identity<T>(value: T) : T {
  return value;
}

identity<string>("hello");
identity<number>(45);
```

### Arrays
- If we use Generics in arrays, we're specifying that the array only stores elements of a specific, consistent type (or set of types)
```ts
// These 2 do the same thing, set up an array that only accepts numbers
const numbers: number[] = [1,2,3];
const numbers: Array<number> = [1,2,3];
```
- If we want our array to accept multiple types, use the union operator
```ts
const mixed: (string | number) [] = [3,4,5,"cat","dog"]
```
- Benefits
  - Consistent Element types in our arrays
  - Safe method usage (ex: using the push method)
  - Correct return types from array operations (map, filter, sort)
  - Intellisense

### Casting
- What is casting in TypeScript?
  - Tell the compiler that we know the type of this value
  - It does not change the value, but helps with compile-time checking
- Casting is useful for when we know the type but that isn't apparent in the code, we tell the compiler to treat the object as a certain type

#### Syntax
- Angle-Bracket

```ts
let value: unknown = "hello";
let length = (<string>value).length;
```

### Use Case
- If we are invoking a method (from some library or built-in function) of which the compiler doesn't know the return type
- ex: retrieving an element from a page
```ts
// Here, the type is not defined explicitly so to use an input element specific method/field
// we would have to cast it
const inputElement = document.getElementById("username-input");
// If we didn't cast, then the compiler wouldn't know that value is a valid field from
// this object
console.log((inputElement as HTMLInputElement).value)
```

### Casting does NOT change the value/type

- The following code is just telling the compiler to treat this as a number but the doesn't change/convert the type of the value itself
```ts
"123" as number
```
- To convert from a string to number
```ts
Number("123")
```

### Utility Types
- Special Types that are used in conjunction with existing types
- Other Examples: https://www.w3schools.com/typescript/typescript_utility_types.php

#### Partial
- Make all properties of the given type optional
- The following code creates a "partial" version of the User type which renders all fields optional
```ts
type User = {
  name: string,
  password: string,
  id: number
}
type PartialUser = Partial<User>;
// equivalent to the following which is a lot more verbose and unnecessary
// type PartialUser = {
//   name?: string,
//   password?: string,
//   id?: number
// }
```

#### Pick
- Creates a type by selecting specific properties from another type
```ts
type UserName = Pick<User, "name">
```

#### Omit
- Creates a type by removing/omitting fields from the given type
```ts
type UserWithoutPassword = Omit<User, "password">
```

#### Record
- let us create an object with specific key value value types
```ts
type ScoreBoard = Record<string, number>
```

### keyof operator
- `keyof` is an operator that will produce a union of all property names (keys) from an object type

```ts
type User = {
  name: string,
  age: number
}

// in this case, UserKeys will contain the key/property names (name | age)
type UserKeys = keyof User;
```

#### Use Case
- Lets TypeScript enforce valid property names
- In the following snippet, we are guaranteed that the second field will be a valid key of the User object
```ts
type UserKeys = keyof User;

function getField(user: User, key: UserKeys) {
  return user[key];
}
```

#### Works with Generics
- Using Generics as well as keyof operator, we can make functions that guarantee the key exists no matter what the type is 
```ts
function printValue<T> (obj: T, key: keyof T) {
  console.log(obj[key]);
}
```


### Decorators
- Syntactically similar to annotations in Java
  - In Java, annotations can provide information ( ex: @Override annotation to indicate that the method is overriding a parent method)
  - Especially in Spring and Spring Boot, annotations provide functionality in certain cases (ex: @Component)
- In TypeScript/Angular, we can apply decorators over classes, methods, properties
  - These decorators usually apply some functionality
- Decorators are special functions that can be attached to classes or class members
```ts
@DecoratorName
class MyClass {
}
```

#### Enabling Decorators
- In tsconfig.json
  - Preferred because we only have to edit the file once
```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```
- We can also specify the same thing (enable decorators) in the command directly:
  - tsc .\file-name.ts --experimentalDecorators --target es2016

#### Syntax
```ts
// First, we set it up:
function Logger(target: Function) {
  console.log("Class/Function Created:", target.name);
}

// Apply Decorator:
@Logger
class User = {}
```
- Logging is something that is pretty standard across an application so setting up a decorator is a good idea because:
  - For each class, we just apply that decorator and the logging functionality is applied

#### Types of Decorators

| Decorator Type | Applies To        |
| -------------- | ----------------- |
| Class          | Entire class      |
| Property       | Class fields      |
| Method         | Methods           |
| Accessor       | Getters/setters   |
| Parameter      | Method parameters |

### Functions
- In TypeScript, we can define input/output types for our functions
- Improve type safety as well as provide information to whoever is viewing our code

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

### as const
- 'as const" a type assertion that tells TypeScript 
  - "Treat this value as immutable and as specific as possible"
- Arrays
  - ```const nums = [1,2,3]```
    - The type of this will be number[]
    - Because we used const, can't change the value
  - using 'as const'
    - ```const nums = [1,2,3] as const```
      - Convert the array into a readonly tuple

### Type Guards
- Techniques that let TypeScript narrow a variable's type at runtime using checks that the compiler understands
1. Variable has multiple potential types
```ts
let value: string | number
// we would want some way to verify that this is a string before trying to access the length property
value.length;
```

2. Built-in Type Guards
- typeof - useful for checking types of primitives or custom types
```ts
function print(x: string | number) {
  // check and ensure the object is of type string before trying to invoke
  // a method that only applies to strings:
  if(typeof x === 'string') {
    console.log(x.toUpperCase());
  }
}
```
- instanceof - useful for checking if an object is an instance of a class
```ts
if(obj instanceof User) {
  obj.printName(); // assuming this method is only available on User class
}
```

- in operator - check if a certain property/method exists on an object
```ts
// define some types which each include their own specific method
type Dog = {bark: () => void};
type Cat = {meow: () => void};

function speak(animal: Cat | Dog) {
  // at this point, we don't know what the type is between Dog and Cat
  // So, we ensure that the field is included in the object before trying to use it
  if('bark' in animal) animal.bark();
  else if('meow' in animal) animal.meow();
}
```


### Interfaces vs Types
- Both are used to describe object shapes
- Interfaces are extendable and better suited for public APIs
- Types are more flexible and can represent unions, primitive, etc
1. Types can be used as aliases for other types including primitives, unions, intersections.
```ts
// using type to create a union between 2 types
type StringOrNumber = string | number;
// use to make an alias for primitives:
type ID = number;
```
2. Different ways of Extending Functionality
```ts
interface User {
  name: string
}

interface Admin extends User {
  role: string
}

// Admin type now includes fields from User as well
let admin:Admin = {
  name: 'darth vader',
  role: 'sith'
}

type Movie = {
  name: string,
  rating: number
}

// This horror movie type also includes fields from Movie
type HorrorMovie = Movie & {
  numScreams: number
}

let horrorMovie:HorrorMovie = {
  name: 'It',
  rating: 5.0,
  numScreams: 20
}
```

3. Interfaces can be merged together (declaration merging)
```ts
interface User {
  name: string
}
interface User {
  age: number
}

// Applying this interface User to an object will mandate that the object has both name and age
```



### Schedule for rest of day
- 1:00 EST to 2:00 EST Lunch
- 2:00-3:00 EST, Rory will be away from call
  - If anything comes up, can message or email me
- 2:00-5:00 EST, time for studying, project work
  - QC tomorrow
    - Should be able to find the link in chat
  - From 3:00-5:00 EST, Rory will be back on call to help if anything comes up
- https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript 