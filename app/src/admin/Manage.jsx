import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DropdownButton, Dropdown, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Manage = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  useEffect(() => {
    // Dynamically import Bootstrap CSS
    import('bootstrap/dist/css/bootstrap.min.css');

    // Fetch books from the backend
    axios.get('http://localhost:3001/all-books')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/book/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      alert("Book deleted successfully");
      setBooks(books.filter(book => book._id !== id));
    }).catch(error => console.error(error));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department === selectedDepartment ? '' : department);
  };

  const handleIncrement = (id) => {
    axios.patch(`http://localhost:3001/book/${id}/increment`)
      .then(response => {
        setBooks(books.map(book => 
          book._id === id ? { ...book, count: book.count + 1 } : book
        ));
      })
      .catch(error => console.error(error));
  };

  const handleDecrement = (id) => {
    axios.patch(`http://localhost:3001/book/${id}/decrement`)
      .then(response => {
        setBooks(books.map(book => 
          book._id === id ? { ...book, count: book.count - 1 } : book
        ));
      })
      .catch(error => console.error(error));
  };

  // Extract unique departments from books data
  const departments = ['All', ...new Set(books.map(book => book.department))];

  // Filter books based on search term and selected department
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedDepartment === '' || book.department === selectedDepartment)
  );

  return (
    <div className="container mt-5">
      <div className="mb-3 flex space-x-3 items-center">
        <input
          type="text"
          className="form-control w-70"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <DropdownButton id="department-dropdown" title={`Department: ${selectedDepartment || 'All'}`}>
          {departments.map((department, index) => (
            <Dropdown.Item key={index} onClick={() => handleDepartmentChange(department)}>
              {department}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <Button type="button" className="btn btn-danger ml-auto">
          Delete Selected
        </Button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Select</th>
              <th>Title</th>
              <th>Department</th>
              <th>Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map(book => (
              <tr key={book._id}>
                <td>
                  <Form.Check
                    type="checkbox"
                    id={`checkbox-${book._id}`}
                    checked={selectedBooks.includes(book._id)}
                    onChange={() => setSelectedBooks(prevSelected => {
                      if (prevSelected.includes(book._id)) {
                        return prevSelected.filter(id => id !== book._id);
                      } else {
                        return [...prevSelected, book._id];
                      }
                    })}
                  />
                </td>
                <td>{book.title}</td>
                <td>{book.department}</td>
                <td>
                  {book.count}
                  <Button variant="link" onClick={() => handleIncrement(book._id)}>
                    <FaPlus />
                  </Button>
                  <Button variant="link" onClick={() => handleDecrement(book._id)}>
                    <FaMinus />
                  </Button>
                </td>
                <td>
                  <Link to={`/admin/dashboard/edit/${book._id}`}>
                    <Button variant="primary" className="mr-2">Edit</Button>
                  </Link>
                  <Button variant="danger" onClick={() => handleDelete(book._id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button type="submit" className="btn btn-primary btn-block mt-3">Submit</Button>
    </div>
  );
};

export default Manage;
