import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentOne from './Components/ComponentOne/ComponentOne'
import ListDemo from './Components/ListDemo/ListDemo'
import EventsDemo from './Components/EventsDemo/EventsDemo'
import ParentComponent from './Components/Props/ParentComponent/ParentComponent'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import HooksDemo from './Components/Hooks/HooksDemo'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ComponentOne/>}></Route>
        <Route path="/events" element={<EventsDemo/>}></Route>
        <Route path="/lists" element={<ListDemo/>}></Route>
        <Route path="/props" element={<ParentComponent/>}></Route>
        <Route path="/hooks" element={<HooksDemo/>}></Route>
      </Routes>
    </>
  )
}

export default App
