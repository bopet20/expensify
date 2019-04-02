import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const formattedAmount = numeral(expensesTotal/100).format('$0,0.00')

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> expense{expenseCount === 1 ? '' : 's'} totalling <span>{formattedAmount}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
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
