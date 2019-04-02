import LoadingPage from '../../components/LoadingPage'

describe('<LoadingPage />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
  })
})