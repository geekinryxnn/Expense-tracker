// src/components/ExpenseList.js
import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
          {expenses.length === 0 && (
            <tr><td colSpan="3">No expenses to display.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;