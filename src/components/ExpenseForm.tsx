import React, { useState } from 'react';
import { Expense } from '../features/expensesSlice';
import './../styles.css'
interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const expense: Expense = {
      id: Math.random().toString(),
      title,
      amount: +amount,
      date: new Date(date),
      description: "",
      category: "",    
    };
    onAddExpense(expense); 
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={event => setAmount(event.target.value)}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
