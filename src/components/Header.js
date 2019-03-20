import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create</NavLink>
    </nav>
  </header>
)

export default Header