import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DYMMY_EXPENSES =[
  {
    id: 'id1',
    date: new Date(2023, 0, 19),
    title: 'New Book',
    price: 39.99
  },
  {
    id: 'id2',
    date: new Date(2024, 0, 19),
    title: 'New Jeans',
    price: 99.99
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const expensesFromLS = JSON.parse(localStorage.getItem('expenses'));
    return expensesFromLS || [];
  })


  useEffect (() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);


  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return[expense, ...expenses]
    })
  }


  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}


export default App
