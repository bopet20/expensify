import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <React.Fragment>
    <Header />
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}/>
  </React.Fragment>
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)
