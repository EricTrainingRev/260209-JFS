import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function HooksDemo() {

    const user = useSelector((state: any) => state.user);
    // let visibility = false;

    // let [visibility, setVisibility] = useState(false);
    // let [counter, setCounter] = useState(0);

    let [state, setState] = useState({
        visibility: false,
        counter: 0
    })

    // useEffect(() => {
    //     console.log("Change detected")
    // }, [state.counter, state.visibility]);

    useEffect(() => {
        async function getDitto(){
            let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
            let responseBody = await response.json();

            console.log(responseBody);
        }

        getDitto();
    }, []);

    function toggleVisibility(){
        // visibility = !visibility;
        // setVisibility(!visibility);
        // console.log(visibility);
        setState({...state, visibility: !state.visibility});
    }

    function increment(){
        // setCounter(counter + 1);
        setState({...state, counter: state.counter + 1});
    }

  return (
    <>

        <h3>USER DATA</h3>
        <h4>{user.username}</h4>
        <h4>{user.password}</h4>
        <button onClick={toggleVisibility}>Toggle</button>


        {
            state.visibility ? <h2>Am I visible?</h2> : <></>
        }

        <h2>Counter: {state.counter}</h2>
        <button onClick={increment}>+</button>
    </>
  )
}

export default HooksDemo