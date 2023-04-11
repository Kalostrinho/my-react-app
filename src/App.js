import { ExpenseList } from './components/expenses/expense-list/ExpenseList'
import { NewExpenseItem } from './components/add-expense-item/new-expense/NewExpenseItem'
import { expenses as statelessExpenses } from './data/dummy-expenses'
import { useState } from 'react'

export const App = () => {

  const STATELESS_EXPENSES = [...statelessExpenses]
  const [expenses, setExpenses] = useState(STATELESS_EXPENSES)
  
  const handleAddExpense = expense => {
    setExpenses(prevExpenses => [...prevExpenses, expense])
  }

  return (
    <div>
      <header>
        <h1>
          Let's <code>code</code> the f**k on!
        </h1>
      </header>
      <NewExpenseItem onSendNewExpense={handleAddExpense}/>
      <ExpenseList expenseList={expenses}/>
    </div>
  );
}
