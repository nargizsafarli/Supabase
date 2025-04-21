import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav-container'>
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>User</NavLink>
        <NavLink to="/data" className={({ isActive }) => isActive ? "active-link" : ""}>data</NavLink>
    </div>
  )
}

export default Nav