import React, { useState } from 'react'

function ComponentB({input, setInput, setSubmitted}: any) {


    function handleUsernameInput(event: any){
        setInput({...input, username: event.target.value})
    }

    function handlePasswordInput(event: any){
        setInput({...input, password: event.target.value})
    }

  return (
    <>
        <input type="text" placeholder='Username' onChange={handleUsernameInput}></input>
        <input type="password" placeholder='Password' onChange={handlePasswordInput}></input>
        <button onClick={() => setSubmitted(true)}>Submit</button>
    </>
  )
}

export default ComponentB