import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  startAddExpense,
  addExpense,
  editExpense,
  startEditExpense,
  startRemoveExpense,
  removeExpense,
  startSetExpenses,
  setExpenses
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const uid = 'testuid'
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({id, ...rest}) => {
    expensesData[id] = {
      ...rest
    }
  })
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})

describe('expense actions', () => {
  it('sets up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc'
    })
  })

  it('removes expenses from database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[0].id

    store.dispatch(startRemoveExpense({ id })).then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      })

      return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
      expect(snapshot.val()).toBeFalsy()
      done()
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

  it('edits expenses in database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[1].id
    const updates = {
      description: 'Bills',
      amount: 50000,
      createdAt: 0,
      note: 'Internet and phone'
    }

    store.dispatch(startEditExpense(id, updates)).then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
      })

      return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(updates)
      done()
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
    const store = createMockStore(defaultAuthState)
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

      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
    })
  })

  it('adds expense with default values to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
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

      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(defaults)
      done()
    })
  })

  it('sets up set expense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
  })

  it('fetches the expenses from Firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetExpenses()).then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
      })
      done()
    })
  })
})
