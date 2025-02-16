const axios = require('axios');

const fetchPlayStationGames = async (psnId, accessToken) => {
    const url = `https://m.np.playstation.com/api/userProfile/v1/users/${psnId}/titles`;

    try {
        const response = await axios.get(url, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        return response.data.titles;
    } catch (error) {
        console.error('Errore nel recupero dei giochi PlayStation:', error);
        return [];
    }
};

module.exports = fetchPlayStationGames;

