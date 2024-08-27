import React from 'react';

const AuthorList = ({ authors }) => {
  return (
    <div>
      <h2>Submitted Author Names</h2>
      <ul>
        {authors.map((author, index) => (
          <li key={index}>{author}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
