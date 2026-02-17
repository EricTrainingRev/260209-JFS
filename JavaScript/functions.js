/*
    Functions in JavaScript are flexible tools for reusing your code where it is needed. A few things
    to keep in mind about your JS functions:
    - JS functions are pass by value
    - you can create anonymous functions
    - you can create arrow functions
    - arrow functions are commonly used with callback functions
*/

// pass by value: x will still equal 5 after the function call
let x = 5;
function addition(num){
    num += 5;
    return num;
}
console.log(addition(x));
console.log(x)

// the change to the age property persists beyond the life of the function
const obj = {name:"Billy", age:12}
function happyBirthday(person){
    person.age += 1;
}
happyBirthday(obj);
console.log(obj.age);

// anonymous function
const myFunction = function(){
    console.log("this is my anonymous function")
}

myFunction();

// arrow function: if it is a single line of code no curly brackets needed
const greeting = (name) => console.log("hello " + name);

greeting("Billy");

// callback functions

function triggerFunction(name, callback){
    console.log("before the callback");
    callback(name);
    console.log("after the callback");
}

triggerFunction("Billy", (name)=> console.log("hello from callback " + name));