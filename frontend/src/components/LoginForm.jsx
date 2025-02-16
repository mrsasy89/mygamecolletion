// frontend/src/components/LoginForm.jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Button, TextField, Container } from '@mui/material';

const LoginForm = () => {
  const { setToken } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', credentials);
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
    } catch (error) {
      console.error('❌ Errore login:', error);
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} required />
        <TextField label="Password" name="password" type="password" fullWidth margin="normal" 
onChange={handleChange} required />
        <Button type="submit" variant="contained" color="primary">Login</Button>
      </form>
    </Container>
  );
};

export default LoginForm;

