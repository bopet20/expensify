import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create</NavLink>
      <button type="submit" onClick={startLogout}>Logout</button>
    </nav>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)