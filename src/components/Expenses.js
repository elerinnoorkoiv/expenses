import './Expenses.css'
import Card from './Card'
import ExpenseItem from "./ExpenseItem"

function Expenses(props){
    const expenses = [
        {
          date: new Date(2024, 0, 26),
          title: 'New book',
          price: 30.99 
        },
        {
          date: new Date(2024, 0, 26),
          title: 'New jeans',
          price: 99.99 
        },
      ]
    return(
        <Card className='card expenses'>
            <ExpenseItem expenseData={expenses[0]} />
            <ExpenseItem expenseData={expenses[1]} />
        </Card>
    )
}

export default Expenses