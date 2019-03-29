import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

describe('<EditExpensePage />', () => {
  let editExpense, startRemoveExpense, history, wrapper, expense

  beforeEach(() => {
    editExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    expense = expenses[0]
    wrapper = shallow(
      <EditExpensePage
        editExpense={editExpense}
        startRemoveExpense={startRemoveExpense}
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
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expense.id })
  })
})