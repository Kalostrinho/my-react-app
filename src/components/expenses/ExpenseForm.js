import React, { useState } from 'react'
import './css/ExpenseForm.css'

/**
 * Stateful component "ExpenseForm"
 * - Presents a form with inputs to add a new expense
 * - Contains logic to submit the input to its parent component (NewExpenseItem)
 * @param {Object} props - React props of the component
 * @returns component's JSX
 */
export const ExpenseForm = (props) => {
    /**
     * Hides the validation messages prompted on screen.
     * @param {Number} [duration=2000] - Milliseconds that the validation will stay on before hiding.
     */
    const hideValidation = (duration = 2000) => {
        setTimeout(() => {
            setValidationContent('')
        }, duration)
    }

    /**
     * Toggles the form ON/OFF.
     */
    const handleToggle = () => {
        setVisibleForm((prevState) => !prevState)
    }

    //--> States for each of the data the user provides...
    const [isValid, setIsValid] = useState('')
    const [validationContent, setValidationContent] = useState('')
    const [newDesc, setNewDesc] = useState('')
    const [newPrice, setNewPrice] = useState('')
    const [newDate, setNewDate] = useState('')
    const [visibleForm, setVisibleForm] = useState(false)

    /**
     * Selects all input content after focus.
     * @param {Object} e - Event given
     */
    const handleFocus = (e) => {
        e.target.select()
    }

    /**
     * Sets the new state to "description"
     * @param {Object} e - Event given
     */
    const handleDescChange = (e) => {
        setNewDesc(e.target.value)
    }

    /**
     * Sets the new state to "price"
     * @param {Object} e - Event given
     */
    const handlePriceChange = (e) => {
        setNewPrice(e.target.value)
    }

    /**
     * Sets the new state to "date"
     * @param {Object} e - Event given
     */
    const handleDateChange = (e) => {
        setNewDate(e.target.value)
    }

    /**
     * Validates that all fields are populated.
     * @returns flag to move forward with next validation.
     */
    const validateRequired = () => {
        let toReturn = true
        if (newDesc.length === 0 || newPrice.length === 0 || newDate.length === 0) {
            setIsValid(() => 'validation-error__control')
            setValidationContent(<label>ALL FIELDS MUST BE SET!</label>)
            toReturn = false
            if (newDesc.length === 0) {
                document.getElementById('input-desc').focus()
            } else if (newPrice.length === 0) {
                document.getElementById('input-price').focus()
            } else {
                document.getElementById('input-date').focus()
            }
            hideValidation()
        }
        return toReturn
    }

    /**
     * Validates that price is higher than 5 bucks.
     * @returns flag to move forward with sending data.
     */
    const validatePrice = () => {
        let toReturn = true
        if (newPrice < 5) {
            setIsValid(() => 'validation-error__control')
            setValidationContent(<label>PRICE MUST BE GREATER THAN $5!</label>)
            toReturn = false
            document.getElementById('input-price').focus()
            hideValidation()
        }
        return toReturn
    }

    /**
     * Consolidates data provided by the user into an object.
     * This object is sent to the parent component
     * @param {Object} e - Event given
     */
    const handleSubmit = (e) => {
        //--> Prevent default behaviour of form (no submission)
        e.preventDefault()

        //--> Validations before sending info...
        if (validateRequired() && validatePrice()) {
            //--> Get all form data into an object to be passed around
            const [newYear, newMonth, newDay] = newDate.split('-')
            const newExpense = {
                description: newDesc,
                price: newPrice,
                date: new Date(Number(newYear), Number(newMonth) - 1, Number(newDay)),
            }

            //--> Get new expense to parent component:
            props.onAddNewExpense(newExpense)

            //--> Return components to initial state after "adding"
            setNewDesc('')
            setNewPrice('')
            setNewDate('')

            //--> Show successful validation and hide...
            setIsValid(() => 'validation-ok__control')
            setValidationContent(<label>NEW EXPENSE ADDED!</label>)
            setTimeout(() => {
                setValidationContent('')
                handleToggle()
            }, 2000)
        }
    }

    /**
     * Sets all states back to default and hides the form.
     * @param {Object} e - Event given
     */
    const handleCancel = (e) => {
        //--> Prevent normal behaviour...
        e.preventDefault()

        //--> Return components to initial state...
        setNewDesc('')
        setNewPrice('')
        setNewDate('')

        //--> Toggle the add new expense form...
        handleToggle()
    }

    /**********************************************
     * FINALLY RETURN COMPONENT... CONDITIONALLY?
     *********************************************/

    if (!visibleForm) {
        return (
            <button id='button-wanna-add-new-expense' onClick={handleToggle}>
                Wanna add a new expense?
            </button>
        )
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Description:</label>
                        <input
                            id='input-description'
                            placeholder='Set new expense description...'
                            type='text'
                            value={newDesc}
                            onChange={handleDescChange}
                            onFocus={handleFocus}
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label>Price:</label>
                        <input
                            id='input-price'
                            placeholder='Set price (greater than $5)'
                            type='number'
                            value={newPrice}
                            min={5.0}
                            step={0.2}
                            onChange={handlePriceChange}
                            onFocus={handleFocus}
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date:</label>
                        <input
                            id='input-date'
                            type='date'
                            value={newDate}
                            min={'2019-01-01'}
                            max={'2023-01-31'}
                            onChange={handleDateChange}
                        />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button id='button-cancel' className='alternative' onClick={handleCancel}>
                        Cancel
                    </button>
                    <button id='button-add-expense' type='submit' onClick={handleSubmit}>
                        Add expense
                    </button>
                </div>
            </form>
            <div id='message-validation' className={isValid}>
                {validationContent}
            </div>
        </div>
    )
}
