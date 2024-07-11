import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    import('bootstrap/dist/css/bootstrap.min.css');

    axios.get('http://localhost:3001/all-users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      alert("User deleted successfully");
      setUsers(users.filter(user => user._id !== id));
    }).catch(error => console.error(error));
  };

  const isBookActive = (book) => {
    const returnDate = new Date(book.returnDate);
    const today = new Date();
    return returnDate >= today;
  };

  return (
    <div className="container mt-5">
      <h2>All Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Books</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.rollNo}</td>
              <td>
                {user.books.length > 0
                  ? user.books.filter(isBookActive).map(book => book.title).join(', ')
                  : 'No books'}
              </td>
              <td>
                <Link to={`/admin/dashboard/users/${user._id}`}>
                  <Button variant="primary" className="mr-2">Issue books</Button>
                </Link>
                <Button variant="danger" onClick={() => handleDelete(user._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllUsers;
