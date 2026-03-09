import React from 'react'
import ChildComponent from '../ChildComponent/ChildComponent'

function ParentComponent() {
  return (
    <>
        <ChildComponent bgColor="red" isRound={true}/>
        <ChildComponent bgColor="lightblue" isRound={false}/>
    </>
  )
}

export default ParentComponent