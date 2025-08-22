import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className="navbar">
        <ul className="navbar__list">
            <li className="navbar__item">
                <NavLink to="/" className="navbar__link">
                  Головна
                </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="navbar__link">
                  Автомобілі
                </NavLink>
            </li>
            <li className="navbar__item">
                <NavLink to="/posts" className="navbar__link">
                  Публікації
                </NavLink>
            </li>
            <li className="navbar__item">
                <NavLink to="/users" className="navbar__link">
                  Користувачі
                </NavLink>
            </li>
            <li>
              <NavLink to="/todos" className="navbar__link">
                  Завдання
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar