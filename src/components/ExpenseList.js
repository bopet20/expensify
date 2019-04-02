import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {
        props.expenses.length === 0 ? (
          <span className="list-item list-item--message">No expenses</span>
        ) : (
          props.expenses.map((expense) => (
            <ExpenseListItem {...expense} key={expense.id} />
          ))
        )
      }
    </div>
  </div>
)

const mapStatetoProps = ({ expenses, filters }) => {
  return {
    expenses: selectExpenses(expenses, filters)
  }
}

export default connect(mapStatetoProps)(ExpenseList)
