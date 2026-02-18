
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
let myString: string;
myString = "Some string value"; // this is valid
// myString = 62; since we set the type to string we can not assign a number value

/*
    Some common types:
*/
const stringType: string = "This is your basic string";
// number can represent whole and floating point values
const numberType: number = 10;
const numberType2: number = 10.2;
const booleantype: boolean = true;

/*
    Typescript provides some "special" types that help to organize and manage your typing
    in your code. The first special type is "any": this tells the compiler that any type of
    data can be assigned, but the tradeoff for this flexibility is you will have zero
    intellisense about the resource itself. To get intellisense you will need to manually check
    the data to see what resources are available in it
*/

const couldBeAnything: any = 50;
if (typeof couldBeAnything === "string"){
    console.log(couldBeAnything.toUpperCase());
}
// note the compiler does not give us an error message here, but the code will fail if run once compiled
console.log(couldBeAnything.toUpperCase());

/*
    If you can't be sure what type or data you are working with but want to keep the strict checking of the TS compiler you can
    use the "unknown" type instead of "any". It works similar to the any type in that any value can be assigned to an unknown variable,
    but if you try to utilize the unknown variable before narrowing its type you will get an error
*/
const unknownValue: unknown = 70;
// unknownValue.toLocalString(); this will cause an error: unknown values need to be narrowed first
if(typeof unknownValue === "number"){
    console.log(unknownValue.toLocaleString())
}

/*
    When working with custom data you will often need to store it in Objects. You can specify the structure of your objects and
    give yourself intellisense for the data you work with by setting your type to match the object structure you are working with. This
    lets you specify the required properties and types of those properties. If any properties are missing or if they type of the data
    assigned to the property is different from what you type hint you will get an error
*/

const user: {id: number, username: string, password: string} = {
    // if we don't have all three properties we will get an error
    id: 20,
    username: "somethingCool",
    password: "true", // if this was a bool type then we would get an error
    // another: true leaving this off because we will get a typing error if we try and include it
}

/*
    TypeScript provides a system for creating custom types that can help simplify the code you write by letting you define your custom
    typing needs one time and then referencing that custom typing wherever you need it
*/

// this technically works, but we may not want to allow tigers as pets
let pet: string = "tiger";

// we can use a union type to specify the allowed specific values (this can also be general types)
let specifiedPet: "dog" | "cat" | "fish" = "cat"; // if we put tiger here we will get an error

// now imagine we have a large application where we reference pets in multiple locations, and we need to update the list
// so that "parrot" pets are allowed. the example before would be a nightmare to deal with, so instead we can create a custom type
// and define the allowed values with the type and then use our custom type wherever we need to specify pet data
type Pet = "dog" | "cat" | "fish" | "parrot";
let typedPet: Pet = "parrot"; // again, if a non-Pet value is provided we will get an error

// You can also specify a more general type value. Be aware you may have to do some narrowing to clarify the type when used
type PossibleTypes = string | number;
let aString: PossibleTypes = "Some string value";
let aNumber: PossibleTypes = 10;
// let aBoolean: PossibleTypes = true; boolean is not a string or number, so this line will cause an error

/*
    If you need to create custom typing for objects you can use an Interface. The benefit of using an Interface over a custom Type
    for objects is Interfaces can be implemented by classes, so you are not just creating a custom type declaration but you are also
    giving yourself a standardized way of extending the capabilities of any classes you create
*/

interface User {
    id: number,
    username: string,
    password: string
}

const newUser: User = {id:2, username:"whatever", password:"whatever"};
const newUser2: User = {id: 3, username:"something", password:"secure"};

/*
    Ultimately custom types and interfaces serve the same purpose: provide type safety for your custom needs. Custom types should be used
    when working with non-object literals or not with classes. On the other hand, when working with your classes or with object literals
    you should prefer to use interfaces
*/

/*
    TypeScript does not have a Tuple type, but you can get Tuple-like rules for your typing by utilizing custom types to enforce
    specific structures for your arrays at compile-time
*/

type Product = string;
type OrderSize = number;
type Price = number;
type PurchaseOrder = [Product, OrderSize, Price];

let purchaseOrder: [Product, OrderSize, Price] = ["apple", 5, 1];
let purchaseOrder2: PurchaseOrder = ["orange", 2, .75];

/*
    If you ever need to have constant values in your app you can utilize Enums to represent them. Enums can represent
    string and number data. If number data is used the enum will auto-increment the value of each data point
*/

// string enum
enum FoodCategory{
    FRUIT = "fruit",
    MEAT = "meat",
}
let myCategory: FoodCategory = FoodCategory.FRUIT

// if no value is provided the enums will represent a numeric value, starting at 0 and increasing by 1
// you can manually set the value for the enum resource, auto incrementing will continue for each value that does not have a designated number
enum Grade{
    PERFECT=100,
    GOOD=150,
    OK, // this will have the numeric value of 151 since that was the last set value
    POOR,
    BAD
}