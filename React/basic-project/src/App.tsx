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
import ComponentA from './Components/LiftingState/ComponentA'
import ContextDemo, { type User } from './Components/useContext/ContextDemo'
import { DashboardContext } from './Components/useContext/context'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from './Redux/slices/userSlice'

function App() {

    const [userContext] = useState<User>({
        isSubscribed: true,
        name: "Mike"
    });

    let [state, setState] = useState({
      username: "",
      password: ""
    })

    const user = useSelector((state: any) => state.user);

    // To update a redux state we use dispatch
    const dispatch = useDispatch();

    function handleSubmit(event: any){
      event.preventDefault();

      dispatch(userActions.setUser(state))
    }

  return (
    <>

    <h2>User Information</h2>
    <h4>{user.username}</h4>
    <h4>{user.password}</h4>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Username' onChange={(event: any) => setState({...state, username: event.target.value})}></input>
      <input type="password" placeholder='Password' onChange={(event: any) => setState({...state, password: event.target.value})}></input>
      <input type="submit"/>
    </form>


    <DashboardContext.Provider value={userContext}>

      <NavBar/>
      <Routes>
        <Route path="/" element={<ComponentOne/>}></Route>
        <Route path="/events" element={<EventsDemo/>}></Route>
        <Route path="/lists" element={<ListDemo/>}></Route>
        <Route path="/props" element={<ParentComponent/>}></Route>
        <Route path="/hooks" element={<HooksDemo/>}></Route>
        <Route path="/lifting" element={<ComponentA/>}></Route>
        <Route path="/context" element={<ContextDemo/>}></Route>
      </Routes>
    </DashboardContext.Provider>
    </>
  )
}

export default App
