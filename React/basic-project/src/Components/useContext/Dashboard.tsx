import React from 'react'
import type { User } from './ContextDemo'
import Sidebar from './Sidebar';
import Profile from './Profile';

interface DashboardProps {
    
}

function Dashboard({}: DashboardProps) {
  return (
    <>
        <Sidebar/>
        <Profile/>
    </>
  )
}

export default Dashboard