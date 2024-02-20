import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
  props.expenses.map((expense) => {
    console.log(expense)
  })
    
    const saveSelectedYearHandler = (selectedYear) => {
      console.log('Year data in Expenses.js', selectedYear)
    }
    return(
        <div className='expenses'>
            <ExpensesFilter saveSelectedYear = {saveSelectedYearHandler}/>
            {
              props.expenses.map((expense) => {
                return <ExpenseItem expenseData={expense} key={expense.id}/>
              })
            }

        </div>
    );
};

export default Expenses