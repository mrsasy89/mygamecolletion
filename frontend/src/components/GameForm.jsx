// frontend/src/components/GameForm.jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Button, TextField, Container } from '@mui/material';

const GameForm = () => {
  const { token } = useContext(AuthContext);
  const [game, setGame] = useState({ title: '', platform: '', status: 'In corso' });

  const handleChange = (e) => {
    setGame({ ...game, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/games', game, { headers: { Authorization: `Bearer ${token}` } });
      alert('Gioco aggiunto!');
    } catch (error) {
      console.error('❌ Errore aggiunta gioco:', error);
    }
  };

  return (
    <Container>
      <h2>Aggiungi un Gioco</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Titolo" name="title" fullWidth margin="normal" onChange={handleChange} required />
        <TextField label="Piattaforma" name="platform" fullWidth margin="normal" onChange={handleChange} 
required />
        <Button type="submit" variant="contained" color="primary">Aggiungi</Button>
      </form>
    </Container>
  );
};

export default GameForm;

