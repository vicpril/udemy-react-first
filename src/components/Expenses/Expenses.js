import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses({ expenses }) {
   const [filteredYear, setFilteredYear] = useState("2020");

   const setYearHandler = (selectedYear) => {
      console.log(selectedYear);
      setFilteredYear(selectedYear);
   };

   return (
      <Card className="expenses">
         <ExpensesFilter selected={filteredYear} onSetYear={setYearHandler} />
         <ExpenseItem expense={expenses[0]} />
         <ExpenseItem expense={expenses[1]} />
         <ExpenseItem expense={expenses[2]} />
      </Card>
   );
}

export default Expenses;
