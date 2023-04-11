import './NewExpenseItem.css'
import { Card } from '../../ui/card/Card'
import { ExpenseForm } from '../new-expense-form/ExpenseForm'

export const NewExpenseItem = (props) => {
    
    const addNewExpense = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: (Math.floor(Math.random() * 100) + 4).toString()
        }
        props.onSendNewExpense(expenseData)
    }

    return (
        <Card className='new-expense'>
            <ExpenseForm onAddNewExpense={addNewExpense}/>
        </Card>
    )
}