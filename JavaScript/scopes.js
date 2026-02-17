/*
    When creating variables you need to use one of three keywords to declare you are making the variable:
    var -> original way to declare variables: hoists the declaration to the top of the module
    let -> preferred way to declare variables that are expected to have their value change over time
    const -> preferred way to declare variables that have a static value: if you try and change their value you will get an error
*/  


// Hoisting example

console.log(hoistedVar);
var hoistedVar = "This was hoisted";
console.log(hoistedVar);

// without the line below the first console.log will cause an error
let changeableVar;
console.log(changeableVar);
changeableVar = "This will not hoist";
console.log(changeableVar);

// const variables can not have their assigned value changed
const staticValue = "This can not be changed";
// staticValue = "this will not work";

// Note: objects can have their properties changed, but the variable reference can not change
const myObj = {propOne:"first", propTwo: "second"};
myObj.propTwo = 2;


/*
    All the variables above are declared in the "global" scope. This means they can be accessed anywhere within the module. 
    Keep in mind that just referencing global resources can make managing larger applications difficult over the long run, so
    do your best to avoid the temptation of just referencing global resources when building your applications
*/

/*
    Another scope to be aware of is the function scope. Any variables you declare in your functions exist only within that function.
    If you want to access the data outside of the function you must actively work to get the data outside of the function (return the
    data, add the data to an object passed into the function, something along those lines)
*/

function myFunction(){
    const greeting = "Hello there!";
    console.log(greeting);
    // we can reference the global variable as well
    console.log(staticValue);
}

myFunction();
// console.log(greeting); this will cause an error if we try and run it

/*
    Any variable declared within a "block" of code (think between opening and closing curly brackets) exists only within that block
    of code. It is similar to function scope, but the term is typically used with reference to your logical blocks and your loops
*/

const x = 5;
const y = 7;
if(x+y > 10){
    const z = "They are greater than 10";
    console.log(z);
}
// console.log(z);

/*
    The last commonly referenced scope is the "lexical" scope. This scope is a bit of a combination of the function scope and the
    block scope. We say that a variable exists in the lexical scope when it is declared in a function and then used in a inner
    function of the original function
*/

function outerFunction(){
    let lexicalVar = "This exists in the lexical scope";
    function innerFunction(){
        let functionVar = "This exists in function scope";
        console.log(functionVar);
        console.log(lexicalVar);
    }
    return innerFunction;
}

const theInnerFunction = outerFunction();
theInnerFunction();