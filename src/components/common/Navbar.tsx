import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className="navbar">
        <ul className="navbar__list">
            <li className="navbar__item">
                <NavLink to="/" className="navbar__link">
                  Home
                </NavLink>
            </li>
            <li className="navbar__item">
                <NavLink to="/posts" className="navbar__link">
                  Posts
                </NavLink>
            </li>
            <li className="navbar__item">
                <NavLink to="/users" className="navbar__link">
                  Users
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar