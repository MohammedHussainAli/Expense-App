import './App.css';
import Expense from './Componenets/Expense';

function App() {
  const expenses = [
    {
      id: 'e1',
      expenseTitle: 'Cookies',
      expenseDate:new Date(2021, 3, 28),
      expenseAmount : '294.5'
    },
    {
      id: 'e2',
      expenseTitle: 'Monitor',
      expenseDate:new Date(2021, 3, 28),
      expenseAmount : '298.5'
    },
    {
      id: 'e3',
      expenseTitle: 'Earphones',
      expenseDate:new Date(2021, 3, 28),
      expenseAmount : '297.5'
    },
    {
      id: 'e4',
      expenseTitle: 'Mobile Phone',
      expenseDate:new Date(2021, 3, 28),
      expenseAmount : '299.5'
    },
  ];
  return (
    <>
      <Expense items={expenses}></Expense>
    </>
    
  );
}

export default App;
