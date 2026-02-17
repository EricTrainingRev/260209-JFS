# JavaScript Quick Reference Guide

## JavaScript Overview?

JavaScript is a powerful, flexible programming language that serves as the backbone of modern web development. Originally designed to add interactivity to web pages, JavaScript has evolved into a versatile language used for both client-side and server-side applications.

Key benefits include:
- **Versatility:** JavaScript runs in browsers and on servers (via Node.js), enabling full-stack development with a single language.
- **Multiple paradigms:** Supports object-oriented, functional, and imperative programming styles, allowing developers to choose the best approach for their needs.
- **Dynamic and interpreted:** JavaScript is dynamically typed and interpreted, which speeds up development and makes prototyping easy.
- **Rich ecosystem:** A vast ecosystem of libraries, frameworks, and tools accelerates development and fosters a strong community.

JavaScript’s core features and flexibility make it an essential technology for building interactive, scalable, and maintainable web applications.

```javascript
console.log('Hello, JavaScript!');
```

---

## Datatypes

JavaScript provides a variety of built-in datatypes to support flexible and dynamic programming. Key datatypes include:
- **Number:** Represents both integer and floating-point values (e.g., `42`, `3.14`).
- **String:** Used for textual data (e.g., `'hello'`, `"world"`).
- **Boolean:** Logical values, either `true` or `false`.
- **Null:** Explicitly indicates the absence of any object value.
- **Undefined:** A variable that has been declared but not assigned a value.
- **Object:** Collections of key-value pairs, including arrays and functions.
- **Symbol:** Unique and immutable identifiers, often used as object property keys.
- **BigInt:** Enables representation of integers beyond the safe limit for `Number`.

JavaScript’s dynamic typing allows variables to hold any datatype, making it easy to work with diverse data structures.

```javascript
let num = 10;
let str = "hello";
let isActive = true;
let obj = { name: "Alice" };
let arr = [1, 2, 3];
```

---

## Variable Scopes

Variable scope in JavaScript determines where variables are accessible within your code. Scope types:
- **Global scope:** Variables declared outside any function or block are accessible throughout the entire program.
- **Function scope:** Variables declared within a function are only available inside that function.
- **Block scope:** Variables declared with `let` or `const` inside a block (`{ ... }`) are only accessible within that block.
- **Lexical scope:** Inner functions have access to variables defined in their outer (enclosing) functions.

JavaScript’s scoping rules help organize code, prevent naming conflicts, and control variable lifetimes.

```javascript
var globalVar = "I am global";
function testScope() {
	var functionVar = "I am function-scoped";
	if (true) {
		let blockVar = "I am block-scoped";
	}
}
// Lexical scope example
function outer() {
	let outerVar = 'outer';
	function inner() {
		console.log(outerVar); // 'outer' is accessible here
	}
	inner();
}
```

---

## let and const

Modern JavaScript encourages the use of `let` and `const` for variable declarations, providing clearer intent and improved scoping compared to the older `var` keyword.

- **let:**  
  Declares a block-scoped variable that can be reassigned. Use `let` when the value of the variable needs to change during execution.

- **const:**  
  Declares a block-scoped variable that cannot be reassigned. Use `const` for values that should remain constant throughout their lifetime. Note that objects and arrays declared with `const` can still have their contents modified.

Choosing between `let` and `const` helps communicate your intent and makes code easier to maintain.

```javascript
let count = 5;
count = 10; // OK

const PI = 3.14;
// PI = 3.15; // Error
```

---

## Type Coercion

JavaScript automatically converts values between different datatypes when required, a process known as type coercion. This behavior can simplify code but may also lead to unexpected results if not handled carefully.

Key points:
- **Implicit conversion:** JavaScript may convert values during operations, such as combining strings and numbers or comparing different types.
- **Examples:**  
  - `"5" + 2` results in `'52'` (string concatenation)
  - `"5" - 2` results in `3` (numeric subtraction)
  - `true + 1` results in `2` (boolean to number)

- **Equality operators:**  
  - Use `===` for strict equality (no type conversion).
  - Use `==` for loose equality (with type conversion).

Understanding type coercion helps prevent bugs and ensures your code behaves as intended.

```javascript
console.log("5" == 5);   // true
console.log("5" === 5);  // false
```

---

## Arrays

Arrays in JavaScript are flexible, ordered collections that can store any type of value. They are commonly used for managing lists of data and provide a variety of built-in methods for manipulation.

Key points:
- **Creation:** Arrays are created using square brackets (`[]`) and can hold numbers, strings, objects, or even other arrays.
- **Access:** Elements are accessed by their index, starting at zero.
- **Common operations:**  
  - Add items with `push()`
  - Remove items with `pop()` or `shift()`
  - Get the number of elements with `length`

```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); // "banana"
fruits.push("date");
console.log(fruits.length); // 4
```

---

## Functions

Functions are fundamental building blocks in JavaScript, enabling you to organize code into reusable, logical units. They help encapsulate behavior, promote code reuse, and improve maintainability.

Key points:
- **Declaration:** Functions can be defined using the `function` keyword or as arrow functions.
- **Parameters:** Functions accept parameters, allowing you to pass data and customize behavior.
- **Return values:** Functions can return values, making them flexible for calculations and data processing.
- **First-class citizens:**  
  In JavaScript, functions are "first-class citizens." This means:
  - Functions can be assigned to variables, stored in data structures, and passed as arguments to other functions.
  - Functions can be returned from other functions.
  - Functions can have properties and methods just like objects.
  - There is no restriction on how functions are used, making them highly flexible and enabling patterns like callbacks, higher-order functions, and functional programming.

Using functions effectively helps structure your code and makes it easier to test and extend.

```javascript
function greet(name) {
	return "Hello, " + name;
}

const add = (a, b) => a + b;

console.log(greet("Sam"));
console.log(add(2, 3));
```

---

## The "this" Keyword

The `this` keyword in JavaScript refers to the context in which a function is executed. Understanding how `this` behaves is important for writing reliable and predictable code.

Key points:
- **Global context:** In the global scope, `this` refers to the global object (`window` in browsers).
- **Object methods:** When a function is called as a method of an object, `this` refers to that object.
- **Arrow functions:** Arrow functions do not have their own `this`; they inherit it from the enclosing scope.
- **Function invocation:** In regular functions, `this` depends on how the function is called, which can sometimes lead to unexpected results.

Being aware of how `this` is determined helps avoid common pitfalls, especially when working with event handlers, callbacks, and object-oriented code.

```javascript
const person = {
	name: "Alex",
	greet: function() {
		console.log("Hi, " + this.name);
	}
};
person.greet(); // "Hi, Alex"

function show() {
	console.log(this);
}
show(); // global object
```

---

## Selecting Elements from the DOM

JavaScript provides several methods for selecting elements from the HTML document, enabling you to interact with and manipulate page content.

Key points:
- **By ID:** Use `document.getElementById('id')` to select a single element by its unique ID.
- **By CSS selector:** Use `document.querySelector('selector')` to select the first element matching a CSS selector.
- **Multiple elements:** Use `document.querySelectorAll('selector')` to select all elements matching a CSS selector (returns a NodeList).

Selecting elements is the first step in working with the DOM, allowing you to read or update content, respond to user actions, and dynamically modify the page.

```javascript
const title = document.getElementById('main-title');
const firstItem = document.querySelector('.item');
const allItems = document.querySelectorAll('.item');
```

---

## DOM Manipulation

JavaScript enables you to interact with and modify the Document Object Model (DOM), allowing dynamic updates to web pages in response to user actions or application logic.

Key points:
- **Change content:** Update the text or HTML of elements using `textContent` or `innerHTML`.
- **Modify attributes:** Set or update element attributes with `setAttribute()`.
- **Adjust styles:** Change the appearance of elements by updating their `style` properties.

```javascript
const para = document.querySelector('p');
para.textContent = 'Updated text!';
para.style.fontWeight = 'bold';
```

---

## Events and Listeners

JavaScript enables you to respond to user interactions and other actions through events and event listeners. This is a core part of building interactive web applications.

Key points:
- **Event listeners:** Attach a function (listener) to an element to handle specific events, such as clicks, input changes, or form submissions.
- **Common events:** Examples include `click`, `input`, `submit`, `mouseover`, and more.
- **Syntax:** Use `addEventListener('event', handler)` to register a listener for a specific event type.

Using events and listeners allows your application to react dynamically to user input and system events, creating a responsive user experience.

```javascript
const button = document.querySelector('button');
button.addEventListener('click', function() {
	alert('Button clicked!');
});
```

---

## Bubbling & Capturing

When an event occurs in the DOM, it travels through a process known as event propagation, which consists of two main phases: capturing and bubbling.

Key points:
- **Capturing phase:** The event starts at the root of the DOM and travels down to the target element.
- **Bubbling phase:** After reaching the target, the event bubbles up from the target element back to the root.
- **Default behavior:** Most event listeners respond during the bubbling phase unless specified otherwise.
- **Controlling the phase:** You can choose which phase to listen in by passing a third argument to `addEventListener` (`true` for capturing, `false` for bubbling).

Understanding event propagation helps you manage how events are handled, prevent unwanted side effects, and build more interactive interfaces.

```javascript
element.addEventListener('click', handler, true); // Capturing
element.addEventListener('click', handler, false); // Bubbling (default)
```

---

## Fetch API

The Fetch API provides a modern, promise-based way to make HTTP requests from JavaScript. It is commonly used for retrieving or sending data to servers, enabling dynamic and interactive web applications.

Key points:
- **Promise-based:** Fetch returns a Promise, making it easy to work with asynchronous operations.
- **Flexible:** Supports various HTTP methods (GET, POST, PUT, DELETE, etc.), custom headers, and request bodies.
- **Response handling:** You typically process the response using methods like `.json()`, `.text()`, or `.blob()`.

Using the Fetch API allows you to integrate external data and services into your applications with minimal code.

```javascript
fetch('https://api.example.com/data', {
	method: 'POST', // or 'PUT', 'DELETE', etc.
	headers: {
		'Content-Type': 'application/json',
		'Authorization': 'Bearer TOKEN'
	},
	body: JSON.stringify({
		name: 'Alice',
		age: 30
	})
})
.then(response => response.json())
.then(data => {
	console.log(data);
})
.catch(error => {
	console.error('Error:', error);
});
```

---

## Promises

A Promise is a built-in JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises help manage asynchronous code in a more readable and maintainable way.

Key points:
- **States:** A promise can be in one of three states: *pending*, *fulfilled*, or *rejected*.
- **Chaining:** Use `.then()` to handle successful results and `.catch()` for errors. Promises can be chained for sequential asynchronous operations.
- **Error handling:** Promises provide a cleaner way to handle errors compared to traditional callback patterns.

Using promises makes it easier to write code that deals with asynchronous events, such as network requests or timers.

```javascript
let promise = new Promise((resolve, reject) => {
	setTimeout(() => resolve('Done!'), 1000);
});

promise.then(result => console.log(result)); // 'Done!'
```

---

## async and await Keywords

`async` and `await` are modern JavaScript keywords that simplify working with Promises, making asynchronous code easier to read and maintain.

Key points:
- **async functions:** Declared with the `async` keyword, these functions always return a Promise.
- **await:** Used inside `async` functions to pause execution until a Promise resolves, allowing you to write asynchronous code that looks synchronous.
- **Error handling:** Use `try...catch` blocks within `async` functions to handle errors from awaited Promises.

Using `async` and `await` leads to cleaner, more understandable code when dealing with asynchronous operations such as API calls or timers.

```javascript
async function fetchData() {
	try {
		const response = await fetch('https://api.example.com/data');
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error('Error:', error);
	}
}

fetchData();
```

---

## Template Literals

Template literals provide a modern way to work with strings in JavaScript, offering enhanced readability and flexibility compared to traditional string syntax.

Key points:
- **Backticks:** Template literals are defined using backticks (`` ` ``) instead of single or double quotes.
- **Interpolation:** Embed variables and expressions directly in strings using `${...}`.
- **Multi-line support:** Easily create multi-line strings without special characters.
- **Expression evaluation:** Any valid JavaScript expression can be used inside `${...}`.

Template literals make it easier to construct dynamic strings and handle complex formatting.

```javascript
const name = 'Sam';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Sam!

const multiline = `This is line 1
This is line 2`;
```

---

## Arrow Functions

Arrow functions offer a concise syntax for writing functions in JavaScript. They are especially useful for short, simple functions and are commonly used in modern codebases.

Key points:
- **Syntax:** Use `=>` to define the function. Parentheses around parameters are optional for a single parameter.
- **No own `this`:** Arrow functions do not have their own `this` binding; they inherit `this` from the surrounding scope.
- **No `arguments` object:** Arrow functions do not have their own `arguments` object.
- **Best for callbacks:** Ideal for inline functions, callbacks, and array methods like `map`, `filter`, and `reduce`.

Arrow functions help make code more readable and reduce boilerplate, but are not suitable for all situations (such as object methods or constructors).

```javascript
const add = (a, b) => a + b;
const square = x => x * x;

// With no parameters
const sayHi = () => console.log('Hi!');
```

---

## Closures

A closure is a feature in JavaScript where an inner function retains access to the variables and parameters of its outer function, even after the outer function has finished executing.

Key points:
- **Scope retention:** Closures "remember" the environment in which they were created, allowing inner functions to access variables from their parent scope.
- **Practical uses:** Commonly used for data privacy, function factories, and maintaining state between function calls.
- **Encapsulation:** Closures help encapsulate logic and state, making code more modular and secure.

Closures are fundamental to many advanced JavaScript patterns, including callbacks, event handlers, and module patterns.

```javascript
function makeCounter() {
	let count = 0;
	return function() {
		count++;
		return count;
	};
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

---

## Node.js

Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of the browser, most commonly on the server side. It is widely used for building scalable network applications and backend services.

Key points:
- **Server-side JavaScript:** Enables JavaScript to be used for backend development, not just in the browser.
- **Non-blocking I/O:** Uses an event-driven, non-blocking I/O model for high performance and scalability.
- **Module system:** Supports both CommonJS (`require`, `module.exports`) and ES Modules (`import`, `export`).
- **Rich ecosystem:** npm, the Node.js package manager, provides access to a vast library of open-source modules.

Node.js is a core technology for modern web development, powering everything from simple scripts to large-scale web servers and APIs.

**Modern Module Syntax (ES Modules):**
- Use `import` and `export` instead of `require()` and `module.exports`.
- Supported in Node.js with `.mjs` files or by setting `"type": "module"` in `package.json`.

```javascript
// math.js
export function add(a, b) {
	return a + b;
}

// main.js
import { add } from './math.js';
console.log(add(2, 3)); // 5
```

```javascript
// hello.js
console.log('Hello from Node.js!');

// Run in terminal:
// node hello.js
```

---

## npm

npm (Node Package Manager) is the default package manager for Node.js. It is used to install, share, and manage third-party libraries and tools for JavaScript projects.

Key points:
- **Dependency management:** Easily add, update, or remove packages your project depends on.
- **Script runner:** Define and run custom scripts for tasks like building, testing, or starting your application.
- **Vast ecosystem:** Access to a huge registry of open-source packages for everything from web frameworks to utilities.

Common npm commands:
- `npm init` — Create a new `package.json` file to manage your project’s dependencies and scripts.
- `npm install package` — Install a specific package and add it to your project.
- `npm install` — Install all dependencies listed in `package.json`.
- `npm run script` — Run a script defined in the `scripts` section of `package.json`.

```bash
npm init -y
npm install express
npm start
```