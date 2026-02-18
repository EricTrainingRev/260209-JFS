/*
    One of the core benefits of working with TypeScript over basic JavaScript is the ability
    to declare types for your variables. This allows for consistent use and more useful
    intellisense from your edit that would not normally be available if working with just
    JavaScript.

    To declare the type of a variable you declare the variable like normal but then add a colon
    after the variable name and then put the type of data the variable will reference. Keep in mind
    the typing you set up in your ts files is only enforced at compile-time: JavaScript does not
    have any resources for enforcing your TS typing and so it is possible that when your application
    is deployed users can misuse your application and things can still go wrong. The benefit of
    the type checking provided by TypeScript is found in the development of the code and the
    streamlining of the flow of data through your app
*/
let myString;
myString = "Some string value"; // this is valid
// myString = 62; since we set the type to string we can not assign a number value
/*
    Some common types:
*/
const stringType = "This is your basic string";
// number can represent whole and floating point values
const numberType = 10;
const numberType2 = 10.2;
const booleantype = true;
/*
    Typescript provides some "special" types that help to organize and manage your typing
    in your code. The first special type is "any": this tells the compiler that any type of
    data can be assigned, but the tradeoff for this flexibility is you will have zero
    intellisense about the resource itself. To get intellisense you will need to manually check
    the data to see what resources are available in it
*/
const couldBeAnything = 50;
if (typeof couldBeAnything === "string") {
    console.log(couldBeAnything.toUpperCase());
}
// note the compiler does not give us an error message here, but the code will fail if run once compiled
// console.log(couldBeAnything.toUpperCase());
/*
    If you can't be sure what type or data you are working with but want to keep the strict checking of the TS compiler you can
    use the "unknown" type instead of "any". It works similar to the any type in that any value can be assigned to an unknown variable,
    but if you try to utilize the unknown variable before narrowing its type you will get an error
*/
const unknownValue = 70;
// unknownValue.toLocalString(); this will cause an error: unknown values need to be narrowed first
if (typeof unknownValue === "number") {
    console.log(unknownValue.toLocaleString());
}
export {};
//# sourceMappingURL=basics.js.map