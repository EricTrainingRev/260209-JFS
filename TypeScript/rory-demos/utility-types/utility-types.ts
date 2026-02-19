type Book = {
  name: string,
  author: string,
  sales: number
}

// Partial:

// if we use the partial type, all the fields are rendered optional
let partial_book: Partial<Book> = {
  name: 'The Martian',
  author: 'Andy Weir'
}

console.log(partial_book);


// Pick
let pick_book:Pick<Book, "name" | "author"> = {
  name: "The Hobbit",
  author: "JRR"
}

console.log(pick_book);

// Omit
let omit_book:Omit<Book, "author"> = {
  name: "Harry Potter",
  sales: 1000000
}

console.log(omit_book);

// Records, let use map key-value pairs
// For example, map cat name to information
interface CatInfo {
  age: number;
  color : string;
  food: string;
}

type CatName = "smeagol" | "gollum" | "garfield";

const cats: Record<CatName, CatInfo> = {
  smeagol: {age: 3, color: 'grey and white', food: 'chicken'},
  gollum: {age: 3, color: 'grey', food: 'chicken'},
  garfield: {age: 50, color: 'orange', food: 'lasagna'}
  // gollum: {age: 3, paws: 4}
}