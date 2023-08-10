import React from 'react';
import './../styles.css'

interface MonthlySummaryProps {
    totalExpenses: number;
    expenses: import('../features/expensesSlice').Expense[]; 
  }
const MonthlySummary: React.FC<MonthlySummaryProps> = ({ totalExpenses }) => {
  return (
    <div className="monthly-summary">
      <h2>Monthly Summary</h2>
      <p>Total Expenses for this Month: ${totalExpenses.toFixed(2)}</p>
    </div>
  );
};

export default MonthlySummary;
