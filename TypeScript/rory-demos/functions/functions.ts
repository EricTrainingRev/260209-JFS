function add(a: number, b: number): number {
  // enforces type safety in the function itself:
  return a + b;
  // return true;
}
// Adds Type Safety to our parameters
add(3,4);
// add('cat', 3);

// Adds type safety to our returned values
// ensure we're storing the result of the function in the proper type variable:
let i:number = add(5,6);
// let s:string = add(5,6);