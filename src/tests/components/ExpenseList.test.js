import { ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

describe('<ExpenseList />', () => {
  it('renders with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
  })
})
