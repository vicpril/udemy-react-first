import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChars";

function Expenses({ expenses }) {
   const [filteredYear, setFilteredYear] = useState("2020");

   const filteredExpenses = expenses.filter(
      (expense) => expense.date.getFullYear() === +filteredYear
   );

   const setYearHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
   };

   return (
      <Card className="expenses">
         <ExpenseChart expenses={filteredExpenses} />
         <ExpensesFilter selected={filteredYear} onSetYear={setYearHandler} />
         <ExpensesList expenses={filteredExpenses} />
      </Card>
   );
}

export default Expenses;
