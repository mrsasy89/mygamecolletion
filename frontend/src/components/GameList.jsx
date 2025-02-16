// frontend/src/components/GameList.jsx
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const GameList = () => {
  const { token } = useContext(AuthContext);
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (token) {
      axios.get('/api/games', { headers: { Authorization: `Bearer ${token}` } })
        .then(res => setGames(res.data))
        .catch(err => console.error('❌ Errore caricamento giochi:', err));
    }
  }, [token]);

  return (
    <Grid container spacing={3}>
      {games.map(game => (
        <Grid item xs={12} sm={6} md={4} key={game._id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{game.title}</Typography>
              <Typography color="textSecondary">{game.platform}</Typography>
              <Typography>Status: {game.status}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GameList;

