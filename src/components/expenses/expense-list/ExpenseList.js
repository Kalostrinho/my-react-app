import React, { useState } from 'react'
import { ExpenseItem } from '../expense-item/ExpenseItem'
import { ExpensesFilter } from '../../filter-expenses/ExpensesFilter'
import { Card } from '../../ui/card/Card'
import './ExpenseList.css'

export const ExpenseList = (props) => {
    
    const [filterYear, setFilterYear] = useState('2019')
    const expenses = [...props.expenseList]
    const handleFilterChange = (newFilter) => {
        setFilterYear(newFilter)
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter defaultFilterValue={filterYear} onFilterChange={handleFilterChange}/>
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
            </Card>
        </div>
    )
}
