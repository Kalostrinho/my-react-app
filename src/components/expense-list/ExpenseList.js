import { ExpenseItem } from "../expense-item/ExpenseItem";
import { Card } from "../card/Card";
import { expenses } from "../../data/dummy-expenses";
import './ExpenseList.css'

export const ExpenseList = () => {
  return (
    <Card className="expenses">
      <ExpenseItem
        description={expenses[0].description}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        description={expenses[1].description}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        description={expenses[2].description}
        price={expenses[2].price}
        date={expenses[2].date}
      />
      <ExpenseItem
        description={expenses[3].description}
        price={expenses[3].price}
        date={expenses[3].date}
      />
    </Card>
  );
};
