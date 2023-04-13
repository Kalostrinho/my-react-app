import './css/NewExpenseItem.css'
import { Card } from '../ui/Card'
import { ExpenseForm } from './ExpenseForm'

/**
 * Stateful component "NewExpenseItem"
 * - Presents a card with an "ExpenseForm" to add a new expense
 * - Sends the new expese data to its parent (ExpenseList)
 * @param {Object} props - React props of the component
 * @returns component's JSX
 */
export const NewExpenseItem = (props) => {
    
    /**
     * Sends the new expense data to parent component.
     * @param {Object} newExpenseData - Expense data gathered by the form
     */
    const addNewExpense = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: (Math.floor(Math.random() * 100) + 4).toString(),
        }
        props.onSendNewExpense(expenseData)
    }

    /***************************
     * FINALLY RETURN COMPONENT
     ***************************/
    return (
        <Card className='new-expense'>
            <ExpenseForm onAddNewExpense={addNewExpense}/>
        </Card>
    )
}
