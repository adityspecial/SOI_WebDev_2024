import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import './SignIn.css';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === '123456') {
      // Redirect to admin dashboard
      history.push('/admin/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <Container maxWidth="xs" className="signin-container">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5" className="signin-title">
          Admin Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            className="signin-button"
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
