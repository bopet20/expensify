import { LoginPage } from '../../components/LoginPage'

describe('<LoginPage />', () => {
  let startLogin, wrapper
  beforeEach(() => {
    startLogin = jest.fn()
    wrapper = shallow(<LoginPage startLogin={startLogin}/>)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('handles login with onClick', () => {
    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled()
  })
})