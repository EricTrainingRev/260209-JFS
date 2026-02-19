function print_(x) {
    // check and ensure the object is of type string before trying to invoke
    // a method that only applies to strings:
    if (typeof x === 'string') {
        console.log(x.toUpperCase());
    }
    else if (typeof x === 'number') {
        console.log(x);
    }
}
print_(5);
print_('hello world');
function speak(animal) {
    // at this point, we don't know what the type is between Dog and Cat
    // So, we ensure that the field is included in the object before trying to use it
    if ('bark' in animal)
        animal.bark();
    else if ('meow' in animal)
        animal.meow();
    else {
        console.log("This animal is speaking");
    }
}
var dog = { bark: function () { console.log("Bark!"); } };
var cat = { meow: function () { console.log("Meow!"); } };
var duck = { name: 'Ducky' };
speak(dog);
speak(cat);
speak(dog);
