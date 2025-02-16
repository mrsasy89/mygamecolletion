// frontend/src/components/RegisterForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Container } from '@mui/material';

const RegisterForm = () => {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', user);
      alert('Registrazione completata!');
    } catch (error) {
      console.error('❌ Errore registrazione:', error);
    }
  };

  return (
    <Container>
      <h2>Registrati</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} required />
        <TextField label="Password" name="password" type="password" fullWidth margin="normal" 
onChange={handleChange} required />
        <Button type="submit" variant="contained" color="primary">Registrati</Button>
      </form>
    </Container>
  );
};

export default RegisterForm;

