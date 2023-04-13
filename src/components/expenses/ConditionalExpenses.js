import './css/ConditionalExpenses.css'
import { ExpenseItem } from './ExpenseItem'

/**
 * Stateless component "ConditionalExpenses"
 * - Presents a list of X "ExpenseItems"
 * - Based on filtering, also presents a "fallback" message
 * @param {Object} props - React props of the component
 * @returns component's JSX
 */
export const ConditionalExpenses = (props) => {
    //--> Return fallback if no expenses are presented...
    if (props.expenses.length === 0) {
        return (
            <h2
                key='message-no-expenses'
                id='message-no-expenses'
                className='expenses-list__fallback'
            >
                NO EXPENSES FOUND ON {props.yearFilter}
            </h2>
        )
    }

    //--> Present expenses if any...
    return (
        <ul className='expenses-list'>
            {props.expenses.map((exp, index) => (
                <ExpenseItem
                    key={exp.id}
                    index={index + 1}
                    description={exp.description}
                    price={exp.price}
                    date={exp.date}
                />
            ))}
        </ul>
    )
}
