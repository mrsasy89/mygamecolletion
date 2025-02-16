const Game = require("../models/Game");

exports.getGames = async (req, res) => {
    try {
        const games = await Game.find({ userId: req.user.id });
        res.json(games);
    } catch (error) {
        res.status(500).json({ error: "Errore nel recupero dei giochi" });
    }
};

