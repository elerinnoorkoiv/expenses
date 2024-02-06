import './App.css';
import Expenses from './components/Expenses';

function App() {
  
  return (
    <div className="App">
      <div className='card expenses'>
        <div className='card'>
          <Expenses expenses={Expenses}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
