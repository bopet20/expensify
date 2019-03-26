import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

describe('<AddExpensePage />', () => {
  let startAddExpense, history, wrapper

  beforeEach(() => {
    startAddExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('calls onSubmit on submission', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0])
  })
})