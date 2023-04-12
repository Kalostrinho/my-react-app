import { ExpenseList } from './components/expenses/ExpenseList'
import { NewExpenseItem } from './components/expenses/NewExpenseItem'
import { expenses as statelessExpenses } from './data/expenses/dummy-expenses'
import { useState } from 'react'

export const App = () => {

  //-- Initialize dummy expenses to show something...
  const STATELESS_EXPENSES = [...statelessExpenses]

  //-- Get the initial state for the list of expenses...
  const [expenses, setExpenses] = useState(STATELESS_EXPENSES)
  
  /**
   * Present the newly added expense.
   * @param {Object} expense - The expense added 
   */
  const handleAddExpense = expense => {
    setExpenses(prevExpenses => [...prevExpenses, expense])
  }

  /***************************
   * FINALLY RETURN COMPONENT
   ***************************/
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
