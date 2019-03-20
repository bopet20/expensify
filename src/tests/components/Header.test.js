import Header from '../../components/Header'

describe('<Header />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})
