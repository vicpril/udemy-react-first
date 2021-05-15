import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const INITIAL_EXPENSES = [
   {
      date: new Date(2021, 2, 28),
      title: "Car Insurance",
      amount: "236.29",
   },
   {
      date: new Date(2021, 1, 27),
      title: "Car ",
      amount: "26.29",
   },
   {
      date: new Date(2020, 11, 5),
      title: "Insurance",
      amount: "3.29",
   },
   {
      date: new Date(2019, 8, 5),
      title: "Insurance123",
      amount: "13.29",
   },
];

function App() {
   const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

   const addExpenseHandler = (expense) => {
      console.log("In App");
      console.log(expense);
      setExpenses((prevState) => [expense, ...prevState]);
   };

   return (
      <div>
         <NewExpense onAddExpense={addExpenseHandler} />
         <Expenses expenses={expenses} />
      </div>
   );
}

export default App;
