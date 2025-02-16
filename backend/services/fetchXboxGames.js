const axios = require('axios');

const fetchXboxGames = async (xuid, accessToken) => {
    const url = `https://xboxapi.com/v2/${xuid}/xboxonegames`;

    try {
        const response = await axios.get(url, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        return response.data.titles;
    } catch (error) {
        console.error('Errore nel recupero dei giochi Xbox:', error);
        return [];
    }
};

module.exports = fetchXboxGames;

