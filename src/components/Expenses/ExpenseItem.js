import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import { useState } from 'react'

const ExpenseItem = (props) => {
		
	return (
	<li>
		<Card className="expense-item">
			<ExpenseDate date={props.expensedate}/>
			<div className="expense-item_description">
				<h2>{props.expenseData.title}</h2>
				<div className="expense-item_price">{props.ExpenseData.price}</div>
			</div>	
		</Card>
	</li>


	)
}																		

export default ExpenseItem;