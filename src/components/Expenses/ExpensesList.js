import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
  return (
    <>
      {props.expenses.length === 0 && <p>No expenses found.</p>}
      <ul>
        {props.expenses.length > 0 && props.expenses.map((expense) => (
          expense && expense.title && expense.date && expense.price && <ExpenseItem expenseData={expense} key={expense.id}/> // Lisa see kontroll
        ))}
      </ul>
    </>
  )
}

export default ExpensesList