import React, { useState } from 'react'
import './ExpenseForm.css'

export const ExpenseForm = (props) => {
    const [newTitle, setNewTitle] = useState('')
    const [NewPrice, setNewPrice] = useState('')
    const [newDate, setNewDate] = useState('')
    const handleTitleChange = (e) => {
        setNewTitle(e.target.value)
    }
    const handlePriceChange = (e) => {
        setNewPrice(e.target.value)
    }
    const handleDateChange = (e) => {
        setNewDate(e.target.value)
    }
    const handleSubmit = (e) => {
        //--- Prevent default behaviour of form (no submission)
        e.preventDefault()

        //TODO: Probably data validation and errors? 

        //--- Get all form data into an object to be passed around
        const newExpense = {
            title: newTitle,
            price: NewPrice,
            date: new Date(newDate),
        }

        //--- Get new expense to parent component:
        props.onAddNewExpense(newExpense)

        //--- Return components to initial state after "adding"
        setNewTitle('')
        setNewPrice('')
        setNewDate('')

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title:</label>
                    <input type='text' value={newTitle} onChange={handleTitleChange} />
                </div>
                <div className='new-expense__control'>
                    <label>Price:</label>
                    <input
                        type='number'
                        value={NewPrice}
                        min={0.1}
                        step={0.1}
                        onChange={handlePriceChange}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date:</label>
                    <input
                        type='date'
                        value={newDate}
                        min={'2018-01-01'}
                        max={'2023-01-31'}
                        onChange={handleDateChange}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button className='alternative' type='reset'>
                    Clear
                </button>
                <button type='submit' onClick={handleSubmit}>
                    Add item
                </button>
            </div>
        </form>
    )
}
