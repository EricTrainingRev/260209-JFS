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