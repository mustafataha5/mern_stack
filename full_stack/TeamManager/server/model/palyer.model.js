const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the PlayerGame Schema (Join Table)
const playerGameSchema = new Schema({
    player: { type: Schema.Types.ObjectId, ref: 'Player', required: true },
    game: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
    status: {
        type: [Boolean],
        default: [false,false,true],
        required: true,
    },
}, { timestamps: true });

// Define the Game Schema
const gameSchema = new Schema({
    name: {
        type: String,
        required: [true, "Game name is required"],
    },
    players: [{ type: Schema.Types.ObjectId, ref: 'PlayerGame' }] // Reference PlayerGame
}, { timestamps: true });

// Define the Player Schema
const playerSchema = new Schema({
    name: {
        type: String,
        required: [true, "Player Name is required"],
        minlength: [3, "Player Name must be at least 3 characters."]
    },
    position: {
        type: String,
        required: [true, "Position is required"],
        minlength: [1, "Position must be at least one character."]
    },
    games: [{ type: Schema.Types.ObjectId, ref: 'PlayerGame' }] // Reference PlayerGame
}, { timestamps: true });

// Create the models
const PlayerGame = mongoose.model('PlayerGame', playerGameSchema);
const Game = mongoose.model('Game', gameSchema);
const Player = mongoose.model('Player', playerSchema);

module.exports = { Player, Game, PlayerGame };
