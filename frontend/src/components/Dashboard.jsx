// frontend/src/components/Dashboard.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import GameList from './GameList';
import GameForm from './GameForm';
import { Button, Container } from '@mui/material';

const Dashboard = () => {
  const { setToken } = useContext(AuthContext);

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <Container>
      <h1>Dashboard</h1>
      <Button onClick={handleLogout} variant="contained" color="secondary">Logout</Button>
      <GameForm />
      <GameList />
    </Container>
  );
};

export default Dashboard;

