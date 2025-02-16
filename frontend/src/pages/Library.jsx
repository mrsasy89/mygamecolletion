// frontend/src/pages/Library.jsx
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Container, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';

const Library = () => {
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
    <Container>
      <Typography variant="h4" gutterBottom>La tua Libreria 🎮</Typography>
      <Grid container spacing={3}>
        {games.map(game => (
          <Grid item xs={12} sm={6} md={4} key={game._id}>
            <Card>
              <CardMedia component="img" height="140" image={game.cover || "/default-cover.jpg"} 
alt={game.title} />
              <CardContent>
                <Typography variant="h6">{game.title}</Typography>
                <Typography color="textSecondary">{game.platform}</Typography>
                <Typography>Status: {game.status}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Library;

