const express = require('express');
const Game = require('../models/Game');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Ottieni tutti i giochi dell'utente
router.get('/', verifyToken, async (req, res) => {
    try {
        const games = await Game.find({ userId: req.user.userId });
        res.json(games);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching games' });
    }
});

// Aggiungi un nuovo gioco
router.post('/', verifyToken, async (req, res) => {
    try {
        const newGame = new Game({ ...req.body, userId: req.user.userId });
        const savedGame = await newGame.save();
        res.status(201).json(savedGame);
    } catch (error) {
        res.status(500).json({ error: 'Error adding game' });
    }
});

module.exports = router;

