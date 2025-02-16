import React, { useEffect, useState } from "react";
import axios from "axios";
import GameCard from "./GameCard";

const GameLibrary = () => {
    const [games, setGames] = useState([]);
    
    useEffect(() => {
        axios.get("/api/games", { headers: { Authorization: localStorage.getItem("token") } })
            .then(res => setGames(res.data))
            .catch(err => console.error("Errore nel caricamento dei giochi:", err));
    }, []);

    return (
        <div className="game-library">
            {games.map(game => <GameCard key={game._id} game={game} />)}
        </div>
    );
};

export default GameLibrary;

