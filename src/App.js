import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
   const expenses = [
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
   ];

   const addExpenseHandler = (expense) => {
      console.log("In App");
      console.log(expense);
   };

   return (
      <div>
         <NewExpense onAddExpense={addExpenseHandler} />
         <Expenses expenses={expenses} />
      </div>
   );
}

export default App;
