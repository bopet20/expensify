import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

describe('expenses reducer', () => {
  it('sets up the default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
  })

  it('removes an expense by id', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: '1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
  })

  it('doesn\'t remove an expense if id not found', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
  })

  it('adds an expense', () => {
    const action = {
      type: 'ADD_EXPENSE',
      expense: {
        id: '3',
        description: 'Switch',
        note: 'Gift',
        amount: '30000',
        createdAt: 0
      }
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expense])
  })


  const description = 'Fries'
  it('edits an expense', () => {
    const action = {
      type: 'EDIT_EXPENSE',
      id: '0',
      updates: {
        description
      }
    }

    const state = expensesReducer(expenses, action)
    expect(state[0].description).toBe(description)
  })

  it('doesn\'t edit an expense if id not found', () => {
    const action = {
      type: 'EDIT_EXPENSE',
      id: '-1',
      updates: {
        description
      }
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
  })
})