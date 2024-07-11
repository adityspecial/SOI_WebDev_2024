import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Team = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the backend
    axios.get('http://localhost:3001/all-books')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAction = (action, bookId) => {
    console.log(action, bookId);
    // Perform the action using axios
    axios.post('/api/books/action', { action, bookId })
      .then(response => {
        if (action === 'remove') {
          setBooks(books.filter(book => book._id !== bookId));
        }
        // Handle other actions if needed
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="table-responsive mx-n1 px-1 scrollbar">
      <table className="table fs-9 mb-0 border-top border-translucent">
        <thead>
          <tr>
            <th>Title</th>
            <th>Department</th>
            <th>Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.department}</td>
              <td>{book.count}</td>
              <td>
                <DropdownButton id="dropdown-basic-button" title="Actions">
                  <Dropdown.Item onClick={() => handleAction('view', book._id)}>View</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleAction('export', book._id)}>Export</Dropdown.Item>
                  <Dropdown.Item className="text-danger" onClick={() => handleAction('remove', book._id)}>Remove</Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Team;
