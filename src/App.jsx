import React, { useState } from 'react';
import SearchBar from './assets/components/Searchbar.jsx';
import ExpenseForm from './assets/components/ExpenseForm.jsx';

function App() {
  const initialExpenses = [
    { id: 1, name: 'Groceries', category: 'Food', amount: 50, day: new Date().toISOString().slice(0, 10) },
    { id: 2, name: 'Movie Ticket', category: 'Entertainment', amount: 15, day: new Date().toISOString().slice(0, 10) },
    { id: 3, name: 'Rent', category: 'Housing', amount: 1200, day: new Date().toISOString().slice(0, 10) },
    { id: 4, name: 'Gas', category: 'Transportation', amount: 40, day: new Date().toISOString().slice(0, 10) },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);
  // Initialize 'day' to an empty string initially
  const [newExpense, setNewExpense] = useState({ name: '', category: '', amount: '', day: '' });
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
    if (newExpense.name && newExpense.category && newExpense.amount && newExpense.day) {
      const newId = expenses.length > 0 ? Math.max(...expenses.map(expense => expense.id)) + 1 : 1;
      setExpenses([...expenses, { ...newExpense, id: newId }]);
      // Reset 'day' to an empty string after adding
      setNewExpense({ name: '', category: '', amount: '', day: '' });
    } else {
      alert('Please fill in all the fields.');
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
          <ExpenseForm
            newExpense={newExpense}
            handleInputChange={handleInputChange}
            handleAddExpense={handleAddExpense}
          />
        </div>
        <div className="div-search">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <h2>Expenses</h2>
          <table className="expense-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Day</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map(expense => (
                <tr key={expense.id}>
                  <td>{expense.name}</td>
                  <td>{expense.category}</td>
                  <td>${expense.amount}</td>
                  <td>{expense.day && new Date(expense.day).toLocaleDateString()}</td>
                </tr>
              ))}
              {filteredExpenses.length === 0 && (
                <tr>
                  <td colSpan="4">No expenses match your search.</td>
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