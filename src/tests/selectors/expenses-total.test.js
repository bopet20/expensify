import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

describe('expenses total selector', () => {
  it('returns 0 if no expenses', () => {
    const result = selectExpensesTotal([])
    expect(result).toBe(0)
  })

  it('returns value of expense if only one', () => {
    const result = selectExpensesTotal([expenses[0]])
    expect(result).toBe(expenses[0].amount)
  })

  it('adds up multiple expenses', () => {
    const result = selectExpensesTotal(expenses)
    expect(result).toBe(114195)
  })
})
