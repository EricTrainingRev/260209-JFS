/*
    JavaScript arrays are flexible data structures that can hold data and mix and match the
    types of that data in whatever flexible way you need. This makes them useful for quick
    iteration and grouping, but because of their flexible nature you do need to take care when
    writing your code that you are aware of what types you pass into your arrays so that you
    are not trying to call invalid methods or perform invalid actions on the data
*/

const mixedArray = [0, "one", false, {some:'object', with:"properties"}];

/*
    When looping through an array you can use an enhanced for-loop to go element by element. Use
    the "of" keyword when doing this
*/
for(const element of mixedArray){
    console.log(element);
}

/*
    Similar to arrays, you can iterate through objects in JavaScript, but instead of using the
    "of" keyword use the  "in" keyword. This will iterate through the keys of your object
*/
for(const key in mixedArray[3]){
    console.log(key);
}