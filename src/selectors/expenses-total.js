const selectExpensesTotal = (expenses) => {
  const reducer = (amountSum, currentAmount) => amountSum + currentAmount

  return expenses
    .map((expense) => expense.amount)
    .reduce(reducer, 0)
}

export default selectExpensesTotal
