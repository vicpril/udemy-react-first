import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

function NewExpense({ onAddExpense }) {
   const [isShowing, setIsShowing] = useState(false);
   const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id: Math.random().toString(),
      };
      onAddExpense(expenseData);
   };

   const showExpenseFormHandler = () => {
      setIsShowing(true);
   };
   const hideExpenseFormHandler = () => {
      setIsShowing(false);
   };

   return (
      <div className="new-expense">
         {isShowing && (
            <ExpenseForm
               onHideForm={hideExpenseFormHandler}
               onSaveExpenseData={saveExpenseDataHandler}
            />
         )}
         {!isShowing && (
            <button type="button" onClick={showExpenseFormHandler}>
               Add New Expense
            </button>
         )}
      </div>
   );
}

export default NewExpense;
