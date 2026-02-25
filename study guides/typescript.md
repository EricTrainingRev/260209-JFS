# TypeScript Quick Reference Guide

## TypeScript Overview

TypeScript is a modern programming language designed to enhance JavaScript development by introducing static typing and advanced tooling. At its core, TypeScript aims to improve code quality, maintainability, and developer productivity, all while remaining fully compatible with existing JavaScript code and ecosystems.

Key benefits include:
- **Optional static typing:** TypeScript allows you to add type annotations to your code, helping catch errors early and making your intentions clear.
- **Modern JavaScript features:** The language supports the latest JavaScript syntax and features, enabling you to write clean, future-proof code.
- **Improved tooling:** TypeScript integrates seamlessly with editors and build tools, providing features like autocompletion, refactoring, and intelligent error checking.
- **Ecosystem compatibility:** TypeScript compiles to plain JavaScript, so it runs anywhere JavaScript runs and works with popular libraries and frameworks.

TypeScript’s core principles set the foundation for safer, more scalable JavaScript applications, and its flexible adoption model means you can gradually introduce it into existing projects or start fresh with full type safety.

---

## JavaScript vs TypeScript

JavaScript is the foundation of web development, known for its flexibility and dynamic nature. TypeScript builds on this foundation by introducing optional static typing and enhanced tooling, making large-scale development more robust and maintainable.

Key differences include:
- **Typing:** JavaScript uses dynamic typing, allowing variables to change types at runtime. TypeScript introduces optional static typing, enabling you to catch type-related errors during development.
- **Compilation:** JavaScript code runs as-is in browsers and Node.js. TypeScript code is compiled to JavaScript, ensuring compatibility with any JavaScript environment.
- **Tooling and error checking:** TypeScript offers advanced editor support, autocompletion, and compile-time error checking, while JavaScript relies primarily on runtime checks.
- **Adoption model:** TypeScript can be gradually introduced into existing JavaScript projects, letting you adopt type safety at your own pace.

**Example:**

JavaScript:
```javascript
let num = 42;
num = "hello"; // Allowed
```

TypeScript:
```typescript
let num: number = 42;
// num = "hello"; // Error: Type 'string' is not assignable to type 'number'
```

TypeScript’s enhancements help teams write safer, more predictable code, while still leveraging the strengths and ecosystem of JavaScript.

---

## TypeScript Compiler (`tsc`)

The TypeScript compiler (`tsc`) is the primary tool for transforming TypeScript code into standard JavaScript. It checks your code for type errors and outputs JavaScript that can run in any environment where JavaScript is supported.

Key points about `tsc`:
- **Compilation:** Converts `.ts` files into `.js` files, ensuring your code is ready for browsers or Node.js.
- **Project support:** Can compile individual files or entire projects using a configuration file.
- **Configuration:** Uses `tsconfig.json` to define how your project is compiled, including options for target JavaScript version, module system, and strictness.

Common commands:
- `tsc file.ts` — Compile a single TypeScript file.
- `tsc` — Compile the entire project based on `tsconfig.json`.
- `tsc --init` — Generate a starter `tsconfig.json` for your project.

**Sample tsconfig.json:**
```json
{
	"compilerOptions": {
		"target": "es6",
		"module": "commonjs",
		"strict": true
	}
}
```

---

## tsconfig basics

The `tsconfig.json` file is the central configuration for any TypeScript project. It tells the TypeScript compiler how to process your code, which files to include, and what language features to support.

Key points about `tsconfig.json`:
- **Project root:** Place `tsconfig.json` in the root directory of your project to define the scope and settings for compilation.
- **Compiler options:** Configure how TypeScript compiles your code, including target JavaScript version, module system, and strictness.
- **File inclusion:** Specify which files or folders should be included or excluded from compilation.
- **Initialization:** Quickly create a starter config using `tsc --init`.

A well-configured `tsconfig.json` streamlines your development workflow, enforces consistency, and enables advanced TypeScript features across your project.

---

## target

The `target` option in `tsconfig.json` specifies which version of JavaScript your TypeScript code should be compiled to. This setting ensures your output is compatible with the environments where your code will run, such as modern browsers or older JavaScript engines.

Key points about `target`:
- **Version selection:** Choose from options like `es5`, `es6` (also known as `es2015`), `es2020`, and more, depending on your project requirements.
- **Feature support:** Higher targets enable newer JavaScript features in the output, while lower targets maximize compatibility.
- **Best practice:** Select the lowest target that meets your runtime needs to balance modern features and broad compatibility.

**Example:**
```json
{
	"compilerOptions": {
		"target": "es6"
	}
}
```

---

## compiler options

The `compilerOptions` section in `tsconfig.json` gives you fine-grained control over how TypeScript compiles your code. These settings let you tailor the output, enforce code quality, and ensure compatibility with your project's requirements.

Key points about `compilerOptions`:
- **Module system:** Choose how modules are handled in the output (e.g., `commonjs`, `esnext`), depending on your runtime or bundler.
- **Output structure:** Use `outDir` to specify where compiled JavaScript files go, and `rootDir` to define the root of your TypeScript source files.
- **Type safety:** Enable `strict` mode for comprehensive type checking, or adjust individual strictness flags as needed.
- **Interop and compatibility:** Options like `esModuleInterop` help integrate with CommonJS modules and third-party libraries.

**Example:**
```json
{
	"compilerOptions": {
		"module": "commonjs",
		"outDir": "./dist",
		"rootDir": "./src",
		"strict": true,
		"esModuleInterop": true
	}
}
```

A well-chosen set of compiler options helps maintain code quality, supports modern JavaScript features, and ensures your project builds reliably across environments.

---

## strict

The `strict` option in `tsconfig.json` enables TypeScript’s most rigorous type-checking features, helping you catch potential bugs early and write more reliable code.

Key points about `strict`:
- **Comprehensive checks:** Activates a suite of strict type rules, including checks for null/undefined values, implicit `any` types, and more.
- **Safer codebase:** Encourages explicitness and reduces the risk of runtime errors by enforcing best practices.
- **Customizable:** You can enable or disable individual strictness flags to fit your team’s needs, but using `strict: true` is recommended for most projects.

**Features enabled by `strict`:**
- `strictNullChecks`: Prevents assigning `null` or `undefined` to variables unless explicitly allowed.
- `noImplicitAny`: Requires all variables and parameters to have an explicit type.
- `strictFunctionTypes`, `strictPropertyInitialization`, and others for deeper type safety.

**Example:**
```json
{
	"compilerOptions": {
		"strict": true
	}
}
```

---

## TypeScript Installation

TypeScript can be added to your project in a way that fits your workflow and team preferences.

Key points about installation:
- **Global installation:** Use `npm install -g typescript` to make the TypeScript compiler (`tsc`) available system-wide. This is convenient for running TypeScript commands from any terminal.
- **Local installation (recommended):** Use `npm install --save-dev typescript` within your project. This ensures consistent TypeScript versions across your team and integrates smoothly with build tools.

After installation, verify that TypeScript is available by running:
```bash
tsc --version
```

A local installation is generally preferred for project consistency, while a global install is useful for quick experimentation or learning.

---

## Simple Types

TypeScript provides built-in types for the most common data you’ll work with, making your code more predictable and easier to understand.

Key points about simple types:
- **number:** Represents both integers and floating-point values.
- **string:** Used for text and character data.
- **boolean:** Indicates true/false values for logic and conditions.

Using explicit types helps clarify your intent and enables TypeScript to catch mistakes before they reach production.

**Example:**
```typescript
let age: number = 30;
let name: string = "Alice";
let isActive: boolean = true;
```

## Special Types

TypeScript includes several special types to handle advanced scenarios and edge cases in your codebase.

Key points about special types:
- **any:** Disables type checking for a variable, allowing any value. Use sparingly, as it bypasses TypeScript’s safety features.
- **unknown:** Similar to `any`, but safer—values must be checked before use, promoting better type safety.
- **void:** Indicates that a function does not return a value.
- **never:** Used for functions that never return (e.g., those that always throw an error or run indefinitely).
- **null** and **undefined:** Represent the absence of a value; TypeScript can enforce strict handling of these with configuration options.

These types help you express intent, handle uncertain data, and write robust, maintainable code.

**Example:**
```typescript
let value: any = 42;
let input: unknown = "data";
function log(): void {
	console.log("Logging...");
}
function fail(): never {
	throw new Error("Failed!");
}
```

## Object Types

Object types in TypeScript let you describe the structure and expected properties of objects in your code. By specifying the shape of an object, you make your code more readable and help catch errors early.

Key points about object types:
- **Shape definition:** Clearly define what properties an object should have and their types.
- **Type safety:** Prevent mistakes by ensuring only valid objects are assigned.
- **Flexibility:** Object types can be extended, combined, or reused throughout your codebase.

**Example:**
```typescript
let user: { name: string; age: number } = {
	name: "Bob",
	age: 25
};
```

Using object types helps maintain consistency and clarity, especially as your application grows.

## Type Aliases & Interfaces

TypeScript provides two powerful tools for defining custom types: type aliases and interfaces. Both help you describe the shape of objects and functions, making your code more expressive and maintainable.

Key points about type aliases and interfaces:
- **Type aliases:** Use the `type` keyword to create a custom name for any type, including primitives, unions, or object shapes. Type aliases are flexible and can represent complex or simple types.
- **Interfaces:** Use the `interface` keyword to define the structure of object types. Interfaces are ideal for modeling objects and can be extended or merged for scalability.
- **Best practices:** Use interfaces for object-oriented designs and type aliases for primitives, unions, or when you need more flexibility.

**Type Alias Example:**
```typescript
type Point = { x: number; y: number };
let p: Point = { x: 10, y: 20 };

type Name = string;
let myName: Name = "Alice";
```

**Interface Example:**
```typescript
interface Person {
	name: string;
	age: number;
}
let person: Person = { name: "Alice", age: 30 };
```

Choosing between type aliases and interfaces depends on your use case, but both are essential for building clear, type-safe TypeScript applications.

## Union Types

Union types in TypeScript allow you to specify that a variable, parameter, or property can hold values of multiple types. This feature is especially useful when working with APIs, user input, or flexible data structures.

Key points about union types:
- **Type flexibility:** Use the `|` operator to combine types, letting variables accept more than one kind of value.
- **Type safety:** TypeScript enforces that only the specified types are allowed, helping prevent unexpected errors.
- **Common scenarios:** Useful for handling values that may be a number or string, or when working with optional or fallback types.

**Example:**
```typescript
let id: number | string;
id = 123;
id = "abc";
```

Union types help you write code that’s both flexible and safe, adapting to real-world data without sacrificing reliability.

## Tuples

Tuples in TypeScript are specialized arrays that allow you to specify the exact types and order of elements. They’re useful when you need to group related values of different types together in a predictable structure.

Key points about tuples:
- **Fixed length and order:** Each element in a tuple has a specific type and position.
- **Type safety:** TypeScript enforces the types and order, helping prevent mistakes when accessing or assigning values.
- **Common use cases:** Useful for representing pairs, coordinates, or structured data returned from functions.

**Example:**
```typescript
let tuple: [string, number] = ["age", 30];
```

Tuples help clarify intent and structure in your code, especially when working with heterogeneous data.

## String Enums

String enums in TypeScript let you define a set of named constants with string values. They’re useful for representing a fixed set of options, improving code clarity and reducing errors from typos.

Key points about string enums:
- **Named constants:** Each member of a string enum has a descriptive name and a specific string value.
- **Type safety:** TypeScript ensures only valid enum values are used, helping prevent mistakes.
- **Readability:** String enums make your code more expressive, especially when working with configuration, status codes, or user roles.

**Example:**
```typescript
enum Color {
	Red = "RED",
	Green = "GREEN",
	Blue = "BLUE"
}
let c: Color = Color.Green;
```

String enums help organize related values and make your codebase easier to maintain and understand.

## Numeric Enums

Numeric enums in TypeScript allow you to define a set of named constants with numeric values. They’re ideal for representing states, directions, or other categories where numbers are meaningful.

Key points about numeric enums:
- **Automatic numbering:** Members without an explicit value are assigned incrementing numbers, starting from the first value.
- **Type safety:** TypeScript ensures only valid enum values are used, reducing errors from magic numbers.
- **Readability:** Numeric enums make your code more descriptive and easier to maintain.

**Example:**
```typescript
enum Direction {
	Up = 1,
	Down,
	Left,
	Right
}
let d: Direction = Direction.Left;
```

Numeric enums help organize related numeric values and improve clarity in your codebase.

## Classes

Classes in TypeScript provide a blueprint for creating objects with specific properties and methods. They support object-oriented programming concepts such as encapsulation, inheritance, and polymorphism, making it easier to model real-world entities and behaviors.

Key points about classes:
- **Properties and methods:** Define the data and behavior of your objects.
- **Constructors:** Initialize object state when a new instance is created.
- **Inheritance:** Use `extends` to create subclasses and share functionality.
- **Type safety:** TypeScript enforces types for class members, improving reliability.

**Example:**
```typescript
class Animal {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	speak(): void {
		console.log(`${this.name} makes a sound.`);
	}
}

const dog = new Animal("Rex");
dog.speak();
```

Classes help organize your code, promote reuse, and make complex applications easier to maintain and extend.

## Basic Generics

Generics in TypeScript let you write reusable, type-safe code that works with a variety of types. They enable you to define functions, classes, and interfaces that can operate on different data types while preserving type safety.

Key points about generics:
- **Type flexibility:** Use type parameters (like `<T>`) to create components that work with any type.
- **Type inference:** TypeScript can often infer the generic type based on usage, reducing the need for explicit annotations.
- **Reusability:** Generics help you avoid code duplication and make your codebase more maintainable.

**Example:**
```typescript
function identity<T>(value: T): T {
	return value;
}

let num = identity<number>(42);
let str = identity<string>("hello");
```

Generics are essential for building robust libraries, utility functions, and data structures that need to work across many types.

## Array Generics

TypeScript allows you to use generics with arrays to specify the type of elements they contain. This ensures that all items in the array are of the expected type, improving code safety and clarity.

Key points about array generics:
- **Type-safe arrays:** Use `Array<T>` or the shorthand `T[]` to declare arrays of a specific type.
- **Consistency:** Prevents accidental mixing of types within an array.
- **Flexibility:** Works seamlessly with custom types and generics.

**Example:**
```typescript
let numbers: Array<number> = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];
```

Array generics help you write robust, predictable code when working with collections of data.

## Casting

Casting in TypeScript lets you tell the compiler to treat a value as a specific type. This is useful when you know more about the value than TypeScript can infer, such as when working with data from external sources or APIs.

Key points about casting:
- **Type assertion:** Use `as` to assert a value’s type, helping TypeScript understand your intent.
- **Safety:** Casting should be used carefully—incorrect assertions can lead to runtime errors.
- **Common scenarios:** Useful for narrowing `unknown` or `any` types to something more specific.

**Example:**
```typescript
let value: unknown = "hello";
let strLength = (value as string).length;
```

Casting helps bridge gaps between dynamic data and TypeScript’s static type system, making your code safer and more predictable.

## Utility Types

TypeScript provides a set of built-in utility types that help you transform and compose types for flexible, maintainable code. These types are especially useful for working with objects and interfaces in large codebases.

Key points about utility types:
- **Partial<T>:** Makes all properties of a type optional, useful for update patterns or optional configuration.
- **Readonly<T>:** Makes all properties of a type read-only, preventing modification after creation.
- **Pick<T, K>:** Creates a new type by selecting a subset of properties from an existing type.
- **Record<K, T>:** Constructs a type with a set of keys `K`, each mapped to a type `T`.

**Example:**
```typescript
interface User {
	id: number;
	name: string;
}

let partialUser: Partial<User> = {};
let readonlyUser: Readonly<User> = { id: 1, name: "Sam" };
let pickedUser: Pick<User, "id"> = { id: 1 };
let record: Record<string, number> = { a: 1, b: 2 };
```

## Keyof

The `keyof` operator in TypeScript lets you obtain the keys of a type as a union of string (or number) literals. This is useful for creating flexible, type-safe utilities and working with object property names in a reliable way.

Key points about `keyof`:
- **Type extraction:** Produces a union of all property names from a given type.
- **Type safety:** Enables you to reference object keys without risking typos or mismatches.
- **Common use cases:** Used with mapped types, utility types, and generic functions that operate on object properties.

**Example:**
```typescript
interface Car {
	make: string;
	model: string;
}

type CarKeys = keyof Car; // "make" | "model"
```

`keyof` helps you write code that adapts to changes in object shapes, reducing maintenance and improving reliability.

## Decorators

Decorators in TypeScript are special annotations that let you add metadata or modify the behavior of classes, methods, properties, or parameters. They’re commonly used in frameworks for dependency injection, validation, and logging.

Key points about decorators:
- **Annotation syntax:** Decorators use the `@` symbol and are placed above the item they modify.
- **Usage:** Can be applied to classes, methods, properties, or parameters to add functionality or metadata.
- **Configuration:** Decorators are an experimental feature and must be enabled in your `tsconfig.json` (`experimentalDecorators: true`).
- **Framework support:** Widely used in Angular, NestJS, and other TypeScript-based frameworks.

**Example:**
```typescript
function Log(target: any, propertyKey: string) {
	console.log(`Property: ${propertyKey}`);
}

class Example {
	@Log
	name: string = "test";
}
```
- TypeScript 5.0 introduced new decorator support with standardized types for more consistent usage.

## Functions

Functions in TypeScript can have typed parameters and return values, making your code more predictable and easier to maintain. Type annotations help catch errors early and clarify the intent of your APIs.

Key points about functions:
- **Typed parameters:** Specify the type of each parameter for better safety and documentation.
- **Return types:** Declare the return type to ensure functions produce the expected result.
- **Arrow functions:** Use concise syntax for inline or callback functions, with full type support.

**Example:**
```typescript
function add(a: number, b: number): number {
	return a + b;
}

const greet = (name: string): string => `Hello, ${name}`;
```

Typed functions help you build robust, self-documenting code and reduce bugs caused by unexpected values.

## As Const

The `as const` assertion in TypeScript tells the compiler to treat an expression as a literal type, making its value and structure immutable. This is especially useful for defining constant values, readonly arrays, and precise object types.

Key points about `as const`:
- **Literal types:** Converts values to their most specific literal types (e.g., `"foo"` instead of `string`, `[1, 2]` instead of `number[]`).
- **Readonly:** Marks arrays and object properties as `readonly`, preventing modification.
- **Use cases:** Helpful for defining constant configuration, discriminated unions, or ensuring values remain unchanged.

**Example:**
```typescript
const roles = ["admin", "user", "guest"] as const;
// type Roles = readonly ["admin", "user", "guest"]

const config = {
	mode: "dark",
	version: 2
} as const;
// type of config.mode is "dark", not string
```

`as const` helps you write safer, more predictable code by locking down values and types at compile time.

## Type Guards

Type guards in TypeScript are techniques for narrowing the type of a variable within a conditional block. They help you write safer code by letting TypeScript infer more specific types based on runtime checks.

Key points about type guards:
- **Built-in checks:** Use `typeof`, `instanceof`, or equality checks to narrow types.
- **Custom type guards:** Define functions that return a type predicate to help TypeScript understand complex type relationships.
- **Safer code:** Type guards reduce the need for explicit casting and prevent runtime errors.

**Example:**
```typescript
function printId(id: number | string) {
	if (typeof id === "string") {
		console.log(id.toUpperCase());
	} else {
		console.log(id);
	}
}

// Custom type guard
function isString(value: unknown): value is string {
	return typeof value === "string";
}
```