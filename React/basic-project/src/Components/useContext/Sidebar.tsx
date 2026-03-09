import React, { useContext } from 'react'
import type { User } from './ContextDemo'
import { DashboardContext } from './context'

interface SidebarProps {
    
}

function Sidebar({}: SidebarProps) {
    const user = useContext(DashboardContext);
  return (
    <>
        <div>{user?.name}</div>
        <div>Subscription Status: {user?.isSubscribed}</div>
    </>
  )
}

export default Sidebar