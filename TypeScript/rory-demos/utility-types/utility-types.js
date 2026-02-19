// Partial:
// if we use the partial type, all the fields are rendered optional
var partial_book = {
    name: 'The Martian',
    author: 'Andy Weir'
};
console.log(partial_book);
// Pick
var pick_book = {
    name: "The Hobbit",
    author: "JRR"
};
console.log(pick_book);
// Omit
var omit_book = {
    name: "Harry Potter",
    sales: 1000000
};
console.log(omit_book);
