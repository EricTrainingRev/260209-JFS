/*
    Promises are used in asynchronous programming when you know you will get  data back at some
    point but need code execution to progress while you are waiting for that data. This is
    called asynchronous programming. What happens is a method is called and a promise is returned,
    and then code execution continues. Eventually the Promise is checked on and it is resolved
    once the response is returned, or if something goes wrong error handling is done 

    methods to know:
    then(callback) -> this tells your code what to do when the promise is resolved. Can be chained
                      if you need to work with another promise
    catch(callback) -> this tells your code what to do if there is an error while working with the
                       promise
    finally(callback) -> this tells your code what code to execute after dealing with your Promise,
                         whether or not it was successful
*/
const responsePromise = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
responsePromise.then( 
    (response) => {
        console.log(response.status);
        return response.json();
    }
)
.then( 
    (responseBody) => {
        console.log("body retrieved");
    }
)
.catch( 
    (error) => {
        console.error(error);
    } 
)
.finally( 
    ()=> {
        console.log("Always runs at the end");
    } 
)

/*
    While the example above works, it is messy and can be difficult to work with, and anything more
    complex than just a GET request to an API is going to become cumbersome to deal with very quickly.
    The recommended way to work with Promises is through the async/await keywords

    keep in mind if you declare a method or function to be async it will always return
    a promise
*/

async function getPikachuInfo(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    console.log(response.status);
    const responseBody = await response.json();
    console.log(responseBody.name);
}

async function callGetPikachuInfo(){
    await getPikachuInfo();
}

// callGetPikachuInfo()

async function asynchronousmath(numOne, numTwo){
    return numOne + numTwo;
}

async function callAsynchMath(first, second){
    const result = await asynchronousmath(first, second);
    console.log(result);
}

callAsynchMath(10,15);