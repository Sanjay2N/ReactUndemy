import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  const filterList = props.items.filter((ele) => {
    return ele.date.getFullYear() == props.filteredYear;
  });

  if (filterList.length === 0) {
    return <h1 className="expenses-list__fallback">No expense Found</h1>;
  }
  //
  return (
    <ul className="expenses-list">
      {filterList.map((ele) => {
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
