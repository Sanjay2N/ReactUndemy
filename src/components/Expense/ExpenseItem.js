import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(prop) {
  console.log(prop);
  const { date, amount, title } = prop.expense;
  let [Title, setTitle] = useState(title);
  let [Amount, setAmount] = useState(amount);
  const clickHandler = () => {
    console.log("Clicked...");
    // Title = "changed";
    setTitle("updated");
    console.log(Title);
  };
  const clickHandler1 = () => {
    console.log("Clicked 1...");
    // Title = "changed";
    setAmount(10);
    console.log(Title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetails data={{ amount: Amount, title: Title }} />
      <button onClick={clickHandler}>change Title</button>
      <button onClick={clickHandler1}>update Amount</button>
    </Card>
  );
}

export default ExpenseItem;
