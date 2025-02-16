// frontend/src/pages/Profile.jsx
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Container, Typography, Avatar, Button } from '@mui/material';

const Profile = () => {
  const { token, setToken } = useContext(AuthContext);
  const [user, setUser] = useState({ email: '', avatar: '' });

  useEffect(() => {
    if (token) {
      axios.get('/api/auth/profile', { headers: { Authorization: `Bearer ${token}` } })
        .then(res => setUser(res.data))
        .catch(err => console.error('❌ Errore caricamento profilo:', err));
    }
  }, [token]);

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Profilo Utente</Typography>
      <Avatar alt={user.email} src={user.avatar || "/default-avatar.png"} sx={{ width: 100, height: 100 }} />
      <Typography variant="h6">{user.email}</Typography>
      <Button onClick={handleLogout} variant="contained" color="secondary" sx={{ mt: 2 }}>Logout</Button>
    </Container>
  );
};

export default Profile;

