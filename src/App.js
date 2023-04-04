import { ExpenseItem } from './components/expense-item/ExpenseItem'
import { expenses } from './data/dummy-expenses'

function App() {
  return (
    <div>
      <header>
        <h1>
          Let's <code>code</code> the fuck on!
        </h1>
      </header>
      <ExpenseItem 
        description={expenses[0].description}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem 
        description={expenses[1].description}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem 
        description={expenses[2].description}
        price={expenses[2].price}
        date={expenses[2].date}
      />
      <ExpenseItem 
        description={expenses[3].description}
        price={expenses[3].price}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
