import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

describe('<ExpenseDashboardPage />', () => {
  it('renders <ExpenseSummary />, <ExpenseFilters />, and <ExpenseList />', () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot()
  })
})
