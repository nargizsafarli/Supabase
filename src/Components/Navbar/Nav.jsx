import React from 'react'
import { NavLink } from 'react-router-dom'
import nav from "./nav.module.css"

function Nav() {
  return (
    <div className={nav.container}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${nav.link} ${nav.active}` : nav.link}>User</NavLink>
        <NavLink to="/data" className={({ isActive }) =>isActive ? `${nav.link} ${nav.active}` : nav.link}>Data</NavLink>
        <NavLink to="/register" className={({ isActive }) => isActive ? `${nav.link} ${nav.active}` : nav.link}>Form</NavLink>
    </div>
  )
}

export default Nav