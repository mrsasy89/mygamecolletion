import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import GameList from "./components/GameList";
import GameForm from "./components/GameForm";
import LoginForm from "./components/LoginForm";
import { Button, Container, Typography } from "@mui/material";

function App() {
  const { token, setToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  return (
    <AuthProvider>
      <Container>
        <Typography variant="h3" gutterBottom>
          🎮 Game Tracker
        </Typography>
        {loading && <p>Caricamento...</p>}
        {!token ? (
          <LoginForm />
        ) : (
          <>
            <GameForm />
            <GameList />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setToken(null);
                localStorage.removeItem("token");
              }}
            >
              Logout
            </Button>
          </>
        )}
      </Container>
    </AuthProvider>
  );
}

export default App;

