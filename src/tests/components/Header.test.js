import { Header } from '../../components/Header'

describe('<Header />', () => {
  let startLogout, wrapper
  beforeEach(() => {
    startLogout = jest.fn()
    wrapper = shallow(<Header startLogout={startLogout}/>)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('handles logout with onClick', () => {
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
  })
})
