import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchGames = (token) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        if (token) {
            axios.get('/games', { headers: { Authorization: `Bearer ${token}` } })
                .then(res => setGames(res.data))
                .catch(err => console.error("Error fetching games:", err));
        }
    }, [token]);

    return games;
};

export default useFetchGames;

