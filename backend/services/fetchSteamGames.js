const axios = require('axios');

const fetchSteamGames = async (steamId) => {
    const apiKey = process.env.STEAM_API_KEY;
    const url = 
`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${steamId}&format=json`;

    try {
        const response = await axios.get(url);
        return response.data.response.games;
    } catch (error) {
        console.error('Errore nel recupero dei giochi Steam:', error);
        return [];
    }
};

module.exports = fetchSteamGames;

