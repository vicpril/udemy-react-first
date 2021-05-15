import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ expenses }) {
   if (expenses.length === 0) {
      return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
   }

   return (
      <ul className="expenses-list">
         {expenses.map((expense, index) => (
            <ExpenseItem expense={expense} key={index} />
         ))}
      </ul>
   );
}

export default ExpensesList;
