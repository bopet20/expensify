import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map((expense) => (
          <ExpenseListItem {...expense} key={expense.id} />
        ))
      )
    }
  </div>
)

const mapStatetoProps = ({ expenses, filters }) => {
  return {
    expenses: selectExpenses(expenses, filters)
  }
}

export default connect(mapStatetoProps)(ExpenseList)
