import './ExpenseItem.css'
import { ExpenseDate } from '../expense-date/ExpenseDate';
import { Card } from '../../ui/card/Card';
export const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate {...props} />
      <div className='expense-item__description'>
        <h2>{props.description}</h2>
        <h4 className='expense-item__price'>${props.price}</h4>
      </div>
    </Card>
  );
};