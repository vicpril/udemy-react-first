import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm({ onSaveExpenseData, onHideForm }) {
   const initialExpense = {
      title: "",
      amount: "",
      date: "",
   };

   const [enteredExpense, setEnteredExpense] = useState(initialExpense);

   const expenseChangeHandler = (key) => {
      return function (event) {
         setEnteredExpense((prevState) => {
            return {
               ...prevState,
               [key]:
                  key === "date"
                     ? new Date(event.target.value)
                     : key === "amount"
                     ? +event.target.value
                     : event.target.value,
            };
         });
      };
   };

   const onSubmitHandler = (e) => {
      e.preventDefault();
      console.log("~ enteredExpense", enteredExpense);
      onSaveExpenseData(enteredExpense);
      setEnteredExpense(initialExpense);
      onHideForm();
   };

   return (
      <form onSubmit={onSubmitHandler}>
         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Title</label>
               <input
                  type="text"
                  onChange={expenseChangeHandler("title")}
                  value={enteredExpense.title}
               />
            </div>

            <div className="new-expense__control">
               <label>Amount</label>
               <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  onChange={expenseChangeHandler("amount")}
                  value={enteredExpense.amount}
               />
            </div>

            <div className="new-expense__control">
               <label>Date</label>
               <input
                  type="date"
                  min="2019-01-01"
                  max="2022-12-31"
                  onChange={expenseChangeHandler("date")}
                  value={dateToString(enteredExpense.date)}
               />
            </div>
         </div>
         <div className="new-expense__actions">
            <button type="submit" onClick={onHideForm}>
               Cancel
            </button>
            <button type="submit">Add expense</button>
         </div>
      </form>
   );
}

export default ExpenseForm;

function dateToString(date) {
   if (typeof date === "string") {
      return date;
   }
   const month = date.toLocaleString("en-US", { month: "2-digit" });
   const year = date.getFullYear();
   const day = date.toLocaleString("en-US", { day: "2-digit" });
   return `${year}-${month}-${day}`;
}
