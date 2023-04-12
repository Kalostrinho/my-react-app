import './css/ExpensesFilter.css'

/**
 * Stateful component "ExpenseFilter"
 * - Presents "filer by year" functionality coupled to "ExpenseList"
 * - Contains two-way communication with its parent component (ExpenseList)
 *     - Sets the filter's new state
 *     - Gets the default state
 * @param {Object} props - React props of the component
 * @returns component's JSX
 */
export const ExpensesFilter = (props) => {

    /**
     * Sends the filter's new state to the parent component.
     * @param {Object} e - Event given
     */
    const handleFilterChange = (e) => {
        props.onFilterChange(e.target.value)
    }

    /***************************
     * FINALLY RETURN COMPONENT
     ***************************/
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={handleFilterChange} defaultValue={props.defaultFilterValue}>
                    <option value='all'>See all</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}
