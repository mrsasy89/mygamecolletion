const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    platform: { type: String, required: true },
    coverUrl: { type: String },
    genre: { type: String },
    status: { type: String, enum: ["Playing", "Completed", "Backlog"], default: "Backlog" },
    progress: { type: Number, default: 0 },
    achievements: { type: Number, default: 0 },
    totalAchievements: { type: Number, default: 0 },
    timePlayed: { type: Number, default: 0 },
    importedFrom: { type: String }
});

module.exports = mongoose.model("Game", GameSchema);

