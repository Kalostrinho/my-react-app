import './css/ExpenseDate.css'

/**
 * Stateful component "ExpenseDate"
 * - Presents a date mini-card
 * - Contains logic to format the date given by props
 * @param {Object} props - React props of the component
 * @returns component's JSX
 */
export const ExpenseDate = (props) => {

  //--  Format date into "nicer" output...
  const niceMonth = props.date.toLocaleString("en-US", { month: "long" });
  const niceDay = props.date.toLocaleString("en-US", { day: "2-digit" });
  const niceYear = props.date.getFullYear();

  /***************************
   * FINALLY RETURN COMPONENT
   ***************************/
  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{niceMonth}</div>
        <div className='expense-date__day'>{niceDay}</div>
        <div className='expense-date__year'>{niceYear}</div>
    </div>
  )
};
