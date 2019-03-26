import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

describe('expense actions', () => {
  it('sets up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc'
    })
  })

  it('sets up edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note value' })
    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123abc',
      updates: {
         note: 'New note value'
      }
    })
  })

  it('sets up add expense action object with provided values', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: expenses[2]
    })
  })

  it('adds expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
      description: 'Groceries',
      amount: 5000,
      note: 'Split',
      createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      })

      return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
    })
  })

  it('adds expense with default values to database and store', (done) => {
    const store = createMockStore({})
    const defaults = {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }

    store.dispatch(startAddExpense({})).then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...defaults
        }
      })

      return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(defaults)
      done()
    })
  })

  // it('sets up add expense action object with default values', () => {
  //   const action = addExpense()
  //   expect(action).toEqual({
  //     type: 'ADD_EXPENSE',
  //     expense: {
  //       id: expect.any(String),
  //       description: '',
  //       note: '',
  //       amount: 0,
  //       createdAt: 0,
  //     }
  //   })
  // })
})
