import React from 'react';
import { useState } from 'react';
import './../styles.css'

interface ExpenseListProps {
    expenses: Expense[];
    onDeleteExpense: (expenseId: string) => void;
    onEditExpense: (expense: Expense) => void;
  }

interface Expense {
  id: string;
  title: string;
  amount: number;
  description: string;
  category: string;
  date: Date;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onDeleteExpense, onEditExpense }) => {
    const [sortBy, setSortBy] = useState('date');
    const [filterByCategory, setFilterByCategory] = useState('');
    const filteredAndSortedExpenses = expenses
      .filter((expense) => !filterByCategory || expense.category === filterByCategory)
      .sort((a, b) => (sortBy === 'amount' ? a.amount - b.amount : a.date.getTime() - b.date.getTime()));
    return (
      <div>
      <h2 className="h2">Expense List</h2>
      <div className="filters">
        <div className="filter-group">
          <label className="label">Sort by:</label>
          <div className="select-wrapper">
            <select className="select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
        </div>
        <div className="filter-group">
          <label className="label">Filter by category:</label>
          <div className="select-wrapper">
            <select className="select" value={filterByCategory} onChange={(e) => setFilterByCategory(e.target.value)}>
              <option value="">All</option>
              <option value="Food">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>
        </div>
      </div>
        <ul className="expense-list">
      {filteredAndSortedExpenses.map((expense) => (
        <li key={expense.id} className="expense-item">
      <div>
        <h3>{expense.title}</h3>
        <p>Amount: ${expense.amount}</p>
        <p>Date: {expense.date.toDateString()}</p>
      </div>
      <div className="expense-actions">
        <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
        <button className="edit" onClick={() => onEditExpense(expense)}>
          Edit
        </button>
      </div>
    </li>
    ))}
  </ul>
    </div>
  );
};
export default ExpenseList;
