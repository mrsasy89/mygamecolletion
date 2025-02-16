const axios = require('axios');

async function fetchGOGGames(userId) {
    const response = await axios.get(`https://gog-api.com/user/${userId}/games`);
    return response.data;
}

module.exports = fetchGOGGames;

