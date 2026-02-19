// initialize a variable to have the unknown type
var value = "hello";
// Without casting, TypeScript wouldn't know that this variable is a string
// so the compiler wouldn't know if the length method is viable
// If we cast it, we are telling TypeScript that we know this variable is a string and to treat it 
// as a string
// let length = (value).length;
var length_ = value.length;
// The following does the same thing (casting) but uses the "as" keyword
length_ = value.length;
// console.log(length_);
// Casting vs Converting:
// the type is technically unknown but we know it is a string
var num = '42';
// Cast as a number type and then try to add 2
console.log(num + 2);
// Convert to a number before adding:
console.log(Number(num) + 2);
