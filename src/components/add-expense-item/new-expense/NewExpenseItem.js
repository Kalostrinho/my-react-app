import './NewExpenseItem.css'
import { Card } from '../../ui/card/Card'
import { ExpenseForm } from '../new-expense-form/ExpenseForm'

export const NewExpenseItem = (props) => {
    return (
        <Card className='new-expense'>
            <ExpenseForm />
        </Card>
    )
}