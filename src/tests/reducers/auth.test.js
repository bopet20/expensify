import authReducer from '../../reducers/auth'

describe('authentication reducer', () => {
  it('sets the uid on login', () => {
    const uid = '123'
    const action = {
      type: 'LOGIN',
      uid
    }
    const state = authReducer({}, action)
    expect(state).toEqual({
      uid
    })
  })

  it('clears uid on logout', () => {
    const loggedInState = { uid: '123' }
    const action = {
      type: 'LOGOUT'
    }
    const state = authReducer(loggedInState, action)
    expect(state).toEqual({})
  })
})