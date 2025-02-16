const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    steamId: { type: String },
    xboxId: { type: String },
    playstationId: { type: String }
});

module.exports = mongoose.model("User", UserSchema);

