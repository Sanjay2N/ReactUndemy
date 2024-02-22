import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  //   console.log("props");
  //   console.log(filterList);
  //   props.filteredExpenseStateUp(filterList);
  if (props.filterList.length === 0) {
    return <h1 className="expenses-list__fallback">No expense Found</h1>;
  }
  //
  return (
    <ul className="expenses-list">
      {props.filterList.map((ele) => {
        return (
          <ExpenseItem
            key={ele.id}
            title={ele.title}
            amount={ele.amount}
            date={ele.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
