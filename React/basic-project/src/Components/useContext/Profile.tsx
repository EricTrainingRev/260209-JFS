import React, { useContext } from 'react'
import type { User } from './ContextDemo'
import { DashboardContext } from './context'

interface ProfileProps{
    
}

function Profile({}: ProfileProps) {
    const user = useContext(DashboardContext);
  return (
    <>
        <h1>{user?.name}</h1>
    </>
  )
}

export default Profile