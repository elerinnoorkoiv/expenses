import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'


const ExpenseItem = (props) => {
		
	return (
	<li>
		<Card className="expense-item">
			<ExpenseDate date={props.expensedata.date}/>
			<div className="expense-item_description">
				<h2>{props.expenseData.title}</h2>
				<div className="expense-item_price">{props.ExpenseData.price}</div>
			</div>	
		</Card>
	</li>


	)
}																		

export default ExpenseItem;