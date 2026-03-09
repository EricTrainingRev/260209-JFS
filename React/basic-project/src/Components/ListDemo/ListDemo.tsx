import React from 'react'

let users = [
    {
        "firstName": "Greg",
        "lastName": "Jones"
    },
    {
        "firstName": "Bill",
        "lastName": "Jones"
    },
    {
        "firstName": "Jane",
        "lastName": "Jones"
    },
    {
        "firstName": "Jill",
        "lastName": "Jones"
    },
]

function ListDemo() {
  return (
    <>
    {/* Hard coding, don't do this */}
        {/* <h2>{users[0].firstName}</h2>
        <h2>{users[0].lastName}</h2> */}
    
    {/* To display each item in the aray to the DOM, we will use a map function to transform each item in the array */}

    {
        users.map((obj, index) => {
            return (
                <div key={index}>
                    <h1>{obj.firstName} {obj.lastName}</h1>
                </div>
            )
        })
    }
    </>
  )
}

export default ListDemo