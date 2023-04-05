import './ExpenseDate.css'

export const ExpenseDate = (props) => {
  const niceMonth = props.date.toLocaleString("en-US", { month: "long" });
  const niceDay = props.date.toLocaleString("en-US", { day: "2-digit" });
  const niceYear = props.date.getFullYear();
  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{niceMonth}</div>
        <div className='expense-date__day'>{niceDay}</div>
        <div className='expense-date__year'>{niceYear}</div>
    </div>
  )
};
