import React, { useState } from 'react'
import { ExpenseItem } from './ExpenseItem'
import { ExpensesFilter } from './ExpensesFilter'
import { Card } from '../ui/Card'
import './css/ExpenseList.css'

/**
 * Stateful component "ExpenseList"
 * - Presents a list of X "ExpenseItems"
 * - Presents a filtering for "ExpenseItems" based on year (ExpensesFilter)
 * - Contains logic to hide/show "ExpenseItems" based on filter
 *     - Uses `conditional content`
 * @param {Object} props - React props of the component
 * @returns component's JSX
 */
export const ExpenseList = (props) => {
    
    //--> State for the filter...
    const [filterYear, setFilterYear] = useState('all')
    
    //--> Setting the prop to an expenses const...
    const expenses = [...props.expenseList]

    /**
     * Handle the event for changing the year filter and
     * set the proper state to it.
     * @param {String} newFilter - The new year to set as state for the filter.
     */
    const handleFilterChange = (newFilter) => {
        setFilterYear(newFilter)
    }

    //--> Setting a filtered array to feed the list of expenses displayed...
    const filteredExpenses =
        filterYear !== 'all'
            ? expenses.filter((exp) => {
                  return exp.date.getFullYear().toString() === filterYear
              })
            : [...expenses]

    //--> Set conditional content depending on the
    //--> number of expenses returned by the filter
    let expensesContent = <div className='norecords'>NO EXPENSES FOUND ON {filterYear}</div>
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((exp) => (
            <ExpenseItem
                key={exp.id}
                description={exp.description}
                price={exp.price}
                date={exp.date}
            />
        ))
    }

    /***************************
     * FINALLY RETURN COMPONENT
     ***************************/
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    defaultFilterValue={filterYear}
                    onFilterChange={handleFilterChange}
                />
                {expensesContent}
            </Card>
        </div>
    )
}
