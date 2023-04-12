import './css/ExpenseItem.css'
import { ExpenseDate } from './ExpenseDate';
import { Card } from '../ui/Card';

/**
 * Stateless component "ExpenseItem"
 * - Presents an "ExpenseItem" with date, description and price.
 * - No logic here (not-so-smart component).
 * @param {Object} props - React props of the component
 * @returns component's JSX
 */
export const ExpenseItem = (props) => {

  /***************************
   * JUST RETURNS A COMPONENT
   ***************************/
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