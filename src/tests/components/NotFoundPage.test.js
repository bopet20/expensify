import NotFoundPage from '../../components/NotFoundPage'

describe('<NotFoundPage />', () => {
  it('renders 404 message and home <Link />', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
  })
})
