// frontend/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>Benvenuto su Game Tracker 🎮</Typography>
      <Typography variant="h6" gutterBottom>Gestisci la tua collezione di giochi con facilità!</Typography>
      <Button component={Link} to="/login" variant="contained" color="primary" sx={{ m: 1 }}>
        Accedi
      </Button>
      <Button component={Link} to="/register" variant="contained" color="secondary" sx={{ m: 1 }}>
        Registrati
      </Button>
    </Container>
  );
};

export default Home;

