import React, { useState } from 'react';
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';
import UserList from './components/UserList';
import './App.css';

const App = () => {
  const [authors, setAuthors] = useState([]);

  const handleAddAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  return (
    <div className="container">
      <h1>Assessment 1 App</h1>
      <div className="form-container">
        <AuthorForm onAddAuthor={handleAddAuthor} />
      </div>
      <AuthorList authors={authors} />
      <UserList />
    </div>
  );
};

export default App;
