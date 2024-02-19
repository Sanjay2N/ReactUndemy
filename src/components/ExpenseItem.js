import "./ExpenseItems.css";

function ExpenseItem(prop) {
  console.log(prop);
  const { date, amount, title } = prop.expense;
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
