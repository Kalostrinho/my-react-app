import { ExpenseList } from './components/expenses/expense-list/ExpenseList'
import { NewExpenseItem } from './components/add-expense-item/new-expense/NewExpenseItem'

export const App = () => {
  return (
    <div>
      <header>
        <h1>
          Let's <code>code</code> the fuck on!
        </h1>
      </header>
      <NewExpenseItem />
      <ExpenseList />
    </div>
  );
}
