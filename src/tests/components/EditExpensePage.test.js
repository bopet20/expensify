import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

describe('<EditExpensePage />', () => {
  let editExpense, removeExpense, history, wrapper, expense

  beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    expense = expenses[0]
    wrapper = shallow(
      <EditExpensePage
        editExpense={editExpense}
        removeExpense={removeExpense}
        history={history}
        expense={expense}
      />)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('edits the expense with onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense)
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense)
  })

  it('removes the expense with onRemove', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expense.id })
  })
})