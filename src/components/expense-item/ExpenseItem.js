import './ExpenseItem.css'
import { ExpenseDate } from '../expense-date/ExpenseDate';
export const ExpenseItem = (props) => {
  

  return (
    <div className='expense-item'>
      <ExpenseDate {...props} />
      <div className='expense-item__description'>
        <h2>{props.description}</h2>
        <h4 className='expense-item__price'>${props.price}</h4>
      </div>
    </div>
  );
};
