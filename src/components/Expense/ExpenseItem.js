import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

function ExpenseItem(prop) {
  console.log(prop);
  const { date, amount, title } = prop.expense;
  const clickHandler = () => {
    console.log("Clicked...");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetails data={{ amount: amount, title: title }} />
      <button onClick={clickHandler}>change Title</button>
    </Card>
  );
}

export default ExpenseItem;
