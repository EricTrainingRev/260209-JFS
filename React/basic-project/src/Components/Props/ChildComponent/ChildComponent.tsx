import React from 'react'

function ChildComponent(props: {bgColor: string, isRound?: boolean}) {
  return (
    <button style={{
        backgroundColor: props.bgColor,
        border: "none",
        borderRadius: props.isRound ? "6px" : "0px"
    }}>Click Me</button>
  )
}

export default ChildComponent