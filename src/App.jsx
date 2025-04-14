import React, { useState } from 'react';

function App() {
  const initialExpenses = [
    { id: 1, name: 'Groceries', category: 'Food', amount: 50 },
    { id: 2, name: 'Movie Ticket', category: 'Entertainment', amount: 15 },
    { id: 3, name: 'Rent', category: 'Housing', amount: 1200 },
    { id: 4, name: 'Gas', category: 'Transportation', amount: 40 },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);
  const [newExpense, setNewExpense] = useState({ name: '', category: '', amount: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewExpense(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddExpense = (event) => {
    event.preventDefault();
    if (newExpense.name && newExpense.category && newExpense.amount) {
      const newId = expenses.length > 0 ? Math.max(...expenses.map(expense => expense.id)) + 1 : 1;
      setExpenses([...expenses, { ...newExpense, id: newId }]);
      setNewExpense({ name: '', category: '', amount: '' });
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="header-container">
        <h1>Expense Tracker</h1>
        <p>Start taking control of your finances and life.Record , categorize , and analyze your spending</p>
      </div>

      <div className="container">
        <div className="div-form">
        <h2>Add New Expense</h2>        
        <form onSubmit={handleAddExpense}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newExpense.name}
            onChange={handleInputChange}
            required />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={newExpense.category}
            onChange={handleInputChange}
            required />

          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={newExpense.amount}
            onChange={handleInputChange}
            required />
          <label htmlfor='day' >Day:</label>
        <input
          type="date"
          id="day"
          name="day"
          value={newExpense.day}
          onChange={handleInputChange}
          required />

        <button type="submit">Add Expense</button>
        </form>
        </div>
        <div className="div-search">
        <label htmlFor="search">Search Expenses:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name or category" />

        <h2>Expenses</h2>
        <table className="expense-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map(expense => (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>{expense.category}</td>
                <td>${expense.amount}</td>
                <td>{expense.day}</td>
              </tr>
            ))}
            {filteredExpenses.length === 0 && (
              <tr>
                <td colSpan="3">No expenses match your search.</td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
    
  
}

export default App;
