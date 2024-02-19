import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

function ExpenseItem(prop) {
  console.log(prop);
  const { date, amount, title } = prop.expense;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetails data={{ amount: amount, title: title }} />
    </Card>
  );
}

export default ExpenseItem;
