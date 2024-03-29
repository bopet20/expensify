import {
   login,
   logout
} from '../../actions/auth'

describe('authentication actions', () => {
  it('sets up the login object', () => {
    const uid = '123'
    const action = login(uid)
    expect(action).toEqual({
      type: 'LOGIN',
      uid
    })
  })

  it('sets up the logout object', () => {
    const action = logout()
    expect(action).toEqual({
      type: 'LOGOUT'
    })
  })
})