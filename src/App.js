import { ExpenseList } from './components/expenses/expense-list/ExpenseList'
import { NewExpenseItem } from './components/add-expense-item/new-expense/NewExpenseItem'
import { expenses } from './data/dummy-expenses'

export const App = () => {

  let updatedExpenses = [...expenses]
  const handleAddExpense = expense => {
    updatedExpenses.push(expense)
    console.log(`--> In APP.js, this is expense: [${JSON.stringify(expense ?? {})}]`)
    console.log(`--> In APP.js, this is updatedExpenses: [${JSON.stringify(updatedExpenses)}]`)
  }

  return (
    <div>
      <header>
        <h1>
          Let's <code>code</code> the f**k on!
        </h1>
      </header>
      <NewExpenseItem onSendNewExpense={handleAddExpense}/>
      <ExpenseList expenseList={updatedExpenses}/>
    </div>
  );
}
