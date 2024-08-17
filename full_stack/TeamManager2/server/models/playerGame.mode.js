const mongoose = require('mongoose');


const playerGameSchema = new mongoose.Schema({
    player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
    status: { type: [Boolean], default:[false,false,true]}
        // enum: ['active','inactive'], default: 'active' }
});

const PlayerGame = mongoose.model('PlayerGame', playerGameSchema);

module.exports = PlayerGame;