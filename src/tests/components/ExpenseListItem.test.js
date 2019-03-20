import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

describe('<ExpenseListItem />', () => {
  it('renders with fixture data', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
  })
})