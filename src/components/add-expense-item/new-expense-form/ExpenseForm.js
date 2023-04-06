import React, { useState } from 'react'
import './ExpenseForm.css'

export const ExpenseForm = (props) => {
    const [newTitle, setNewTitle] = useState('')
    const [NewPrice, setNewPrice] = useState()
    const [newDate, setNewDate] = useState()
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
        console.log('Submit!!')    
    }
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title:</label>
                    <input type='text' onChange={handleTitleChange} />
                </div>
                <div className='new-expense__control'>
                    <label>Price:</label>
                    <input type='number' min={0.1} step={0.1} onChange={handlePriceChange} />
                </div>
                <div className='new-expense__control'>
                    <label>Date:</label>
                    <input
                        type='date'
                        min={'2020-01-01'}
                        max={'2022-12-31'}
                        onChange={handleDateChange}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button className='alternative' type='reset'>
                    Clear
                </button>
                <button type='submit' onSubmit={handleSubmit}>Add item</button>
            </div>
        </form>
    )
}
