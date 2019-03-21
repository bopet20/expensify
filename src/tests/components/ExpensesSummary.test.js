import { ExpensesSummary } from '../../components/ExpensesSummary'

describe('<ExpensesSummary />', () => {
  it('renders one expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={12.3} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders more than one expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={4} expensesTotal={4.567} />)
    expect(wrapper).toMatchSnapshot()
  })
})
