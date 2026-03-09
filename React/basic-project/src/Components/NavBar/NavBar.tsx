import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DashboardContext } from '../useContext/context'

function NavBar() {

  const user = useContext(DashboardContext);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <h2>{user?.name}</h2>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to="/events">Events</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/lists">Lists</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/props">Props</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/hooks">Hooks</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/lifting">Lifting State</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/context">Use Context</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
  )
}

export default NavBar