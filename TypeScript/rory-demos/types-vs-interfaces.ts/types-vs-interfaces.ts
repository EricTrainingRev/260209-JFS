// using type to create a union between 2 types
type StringOrNumber = string | number;
// use to make an alias for primitives:
type ID = number;

// Extending:
interface User {
  name: string
}

interface Admin extends User {
  role: string
}

// Admin type now includes fields from User as well
let admin:Admin = {
  name: 'darth vader',
  role: 'sith'
}

type Movie = {
  name: string,
  rating: number
}

// This horror movie type also includes fields from Movie
type HorrorMovie = Movie & {
  numScreams: number
}

let horrorMovie:HorrorMovie = {
  name: 'It',
  rating: 5.0,
  numScreams: 20
}

// Declaration Merging
interface Song {
  title: string,
  artist: string
}

interface Song {
  genre: string
}

// This object will be expected to include title, artist, genre (merged from the 2 declarations above)
let song: Song = {
  title: 'Bohemian Rhapsody',
  artist: 'Queen',
  genre: 'rock'
}