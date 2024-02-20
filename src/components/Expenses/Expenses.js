import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024')

  const saveSelectedYearHandler = (selectedYear) => {
    console.log('Year data in Expenses.js', selectedYear)
    setFilteredYear(selectedYear) // Lisa see rida
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter saveSelectedYear={saveSelectedYearHandler}/>
      {filteredExpenses.length === 0 && <p>No expenses found.</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
        <ExpenseItem expenseData={expense} key={expense.id}/>
      ))}
    </Card>
  )
}

export default Expenses