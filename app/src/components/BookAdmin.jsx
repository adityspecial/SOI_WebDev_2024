import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookAdmin.css'; // Import the CSS file

const apiUrl = 'http://localhost:3001/books';

const BookAdmin = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    description: '',
    author: '',
    genre: '',
    department: '',
    count: 0,
    vendor: '',
    vendor_id: 0,
    publisher: '',
    publisher_id: 0,
  });
  const [updateBook, setUpdateBook] = useState({ ...newBook, _id: '' });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(apiUrl);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(apiUrl, newBook);
      fetchBooks();
      alert('Book created successfully!');
    } catch (error) {
      console.error('Error creating book:', error);
      alert('Error creating book.');
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${apiUrl}/${updateBook._id}`, updateBook);
      fetchBooks();
      alert('Book updated successfully!');
    } catch (error) {
      console.error('Error updating book:', error);
      alert('Error updating book.');
    }
  };

  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`${apiUrl}/${bookId}`);
      fetchBooks();
      alert('Book deleted successfully!');
    } catch (error) {
      console.error('Error deleting book:', error);
      alert('Error deleting book.');
    }
  };

  const handleChange = (e, setFunction) => {
    const { name, value } = e.target;
    setFunction(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="container p-10">
      <h1>Bookstore Admin Panel</h1>

      <div className="form-container">
        <h2>Create Book</h2>
        <form onSubmit={handleCreate}>
          {Object.keys(newBook).map((key) => (
            <div key={key} className="form-group">
              <input
                type={key.includes('id') || key === 'count' ? 'number' : 'text'}
                name={key}
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                value={newBook[key]}
                onChange={(e) => handleChange(e, setNewBook)}
                required
              />
            </div>
          ))}
          <button type="submit" className="btn">Create Book</button>
        </form>
      </div>

      <div className="list-container">
        <h2>Books List</h2>
        <ul>
          {books.map((book) => (
            <li key={book._id} className="list-item">
              {book.title} by {book.author}
              <div className="button-group">
                <button onClick={() => handleDelete(book._id)} className="btn btn-delete">Delete</button>
                <button onClick={() => setUpdateBook(book)} className="btn btn-edit">Edit</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="form-container">
        <h2>Update Book</h2>
        <form onSubmit={handleUpdate}>
          {Object.keys(updateBook).map((key) => (
            <div key={key} className="form-group">
              <input
                type={key.includes('id') || key === 'count' ? 'number' : 'text'}
                name={key}
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                value={updateBook[key]}
                onChange={(e) => handleChange(e, setUpdateBook)}
                required
              />
            </div>
          ))}
          <button type="submit" className="btn">Update Book</button>
        </form>
      </div>
    </div>
  );
};

export default BookAdmin;
