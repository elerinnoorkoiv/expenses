import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses =[
    {
      date: new Date(2024, 0, 19),
      title: 'New Book',
      price: 39.99
    },
    {
      date: new Date(2024, 0, 19),
      title: 'New Jeans',
      price: 99.99
    },
  ]
  
  return (
    <div className="App">
      <NewExpense></NewExpense>
      <Expenses expenses={Expenses} />
    </div>
  );
}

export default App;
