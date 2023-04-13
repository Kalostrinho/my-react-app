import React, { useState } from 'react'
import { ExpensesFilter } from './ExpensesFilter'
import { ConditionalExpenses } from './ConditionalExpenses'
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
                <ConditionalExpenses expenses={filteredExpenses} yearFilter={filterYear} />
            </Card>
        </div>
    )
}
