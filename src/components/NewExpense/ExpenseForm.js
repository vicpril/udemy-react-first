import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm({ onSaveExpenseData }) {
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
               [key]: event.target.value,
            };
         });
      };
   };

   const onSubmitHandler = (e) => {
      e.preventDefault();
      onSaveExpenseData(enteredExpense);
      setEnteredExpense(initialExpense);
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
                  value={enteredExpense.date}
               />
            </div>
         </div>
         <div className="new-expense__actions">
            <button type="submit">Add expense</button>
         </div>
      </form>
   );
}

export default ExpenseForm;
