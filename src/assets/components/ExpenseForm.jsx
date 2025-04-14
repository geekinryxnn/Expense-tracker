import React from 'react';

function ExpenseForm({ newExpense, handleInputChange, handleAddExpense }) {
  return (
    <form onSubmit={handleAddExpense}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={newExpense.name}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        value={newExpense.category}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="amount">Amount:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={newExpense.amount}
        onChange={handleInputChange}
        required
      />
      <label htmlFor='day' >Day:</label>
      <input
        type="date"
        id="day"
        name="day"
        value={newExpense.day}
        onChange={handleInputChange}
        required
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;