type User = {
  name: string,
  age: number
}

// in this case, UserKeys will contain the key/property names (name | age)
type UserKeys = keyof User;

// Useful for situations in which we need to specify key of a given property
// In this case, the compiler has no way of knowing if the key value exists on the user object
// function getField(user: User, key: string) {
//   return user[key];
// }

// If we specify the type of the key as the result of keyof operation from earlier, now 
// the compiler will check if the key is part of those UserKeys
function getField(user: User, key: UserKeys) {
  return user[key];
}

let user:User = {
  name: 'Luke',
  age: 20
}


// Can only pass in valid keys to the second parameter of the function
console.log(getField(user, 'name'));
console.log(getField(user, 'age'));
// console.log(getField(user, 'birthday'));

type School = {
  name: string,
  population: number
}

let school:School = {
  name: 'Hogwarts',
  population: 500
}


// Using Generics with keyof:
// Now this function works with any type but it still has the type-safety of
// ensuring that the key that is passed in is a valid property on the object
function printValue<T> (obj: T, key: keyof T) {
  console.log(obj[key]);
}

// here, TypeScript compiler is checking that the age is a valid property on the User type
printValue<User>(user, 'age');
// Because we're using generics, we can specify the School type (or any other type) to get
// some type-checking that is specific to that structure/type
printValue<School>(school, 'population')