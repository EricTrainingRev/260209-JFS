import React, { useEffect, useState } from 'react'
import ComponentB from './ComponentB'

function ComponentA() {

    let [input, setInput] = useState({
        username: "",
        password: ""
    });

    let [loggedIn, setLoggedIn] = useState(false);

    let [submitted, setSubmitted] = useState(false);

    useEffect(() => {

        function loginUser({username, password}: {username: string, password: string}){
            // API CALL TO BACKEND
            if(username === "user1" && password === "pass1"){
                setLoggedIn(true);
            }else{
                setLoggedIn(false);
            }
        }

        loginUser(input);
    }, [submitted]);

  return (
    <>
        <ComponentB input={input} setInput={setInput} setSubmitted={setSubmitted}/>

        {
            loggedIn ? <h1>YOU ARE LOGGED IN</h1> : <h1>NOT LOGGED IN</h1>
        }
    </>
  )
}

export default ComponentA