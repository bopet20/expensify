import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const formattedAmount = numeral(expensesTotal/100).format('$0,0.00')

  return (
    <div>
      <h2>Viewing {expenseCount} expense{expenseCount === 1 ? '' : 's'} totalling {formattedAmount}</h2>
    </div>
  )
}

const mapStateToProps = ({ expenses, filters }) => {
  const selectedExpenses = selectExpenses(expenses, filters)

  return {
    expenseCount: selectedExpenses.length,
    expensesTotal: selectExpensesTotal(selectedExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
