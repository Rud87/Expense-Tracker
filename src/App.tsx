import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense, editExpense, deleteExpense, Expense } from './features/expensesSlice';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import MonthlySummary from './components/MonthlySummary';
import { RootState } from './store';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state: RootState) => state.expenses.expenses);

  const addExpenseHandler = (expense: Expense) => {
    dispatch(addExpense(expense));
  };

  const editExpenseHandler = (editedExpense: Expense) => {
    const editedExpenseWithSerializedDate = {
      ...editedExpense,
      date: new Date(editedExpense.date), 
    };

    dispatch(editExpense(editedExpenseWithSerializedDate));
  };

  const deleteExpenseHandler = (id: string) => {
    dispatch(deleteExpense(id));
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseList
        expenses={expenses}
        onDeleteExpense={deleteExpenseHandler}
        onEditExpense={editExpenseHandler}
      />
      <MonthlySummary expenses={expenses} totalExpenses={totalExpenses} />
    </div>
  );
};

export default App;
