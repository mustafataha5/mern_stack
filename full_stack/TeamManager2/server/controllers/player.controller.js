const Player= require('../models/player.model')
const Game = require('../models/game.model');
const PlayerGame = require('../models/playerGame.mode');


//create 
module.exports.playerCreate = (req,res) =>{
    Player.create(req.body)
        .then(player => {
            // Fetch all existing games
            return Game.find({})
                .then(games => {
                    // Create "inactive" PlayerGame entries for each game
                    const playerGameEntries = games.map(game => ({
                        player: player._id,
                        game: game._id,
                        status: [false,false,true]
                    }));
                    // Insert PlayerGame entries
                    return PlayerGame.insertMany(playerGameEntries)
                        .then(() => res.json({ player: player }))
                        .catch(err => res.status(400).json(err));
                });
        })
        .catch(err => res.status(400).json(err)); 
}

//get 
module.exports.playerFindAll = (req,res) =>{
    Player.find({})
    .then(players => res.json({players:players}))
    .catch(err => res.json(err)) ; 
}

module.exports.playerFindOne = (req,res) =>{
    Player.findById({_id:req.params.id})
    .then(player => res.json({player:player}))
    .catch(err => res.json(err)) ; 
}

//update 
module.exports.playerUpdate = (req,res) =>{
    Player.findByIdAndUpdate({_id:req.params.id}
        ,req.body 
        ,{new:true,runValidtor:true}
    )
    .then(player => res.json({player:player}))
    .catch(err => res.status(400).json(err)); 
}

//delete 
module.exports.playerDelete = (req,res) =>{
    Player.findByIdAndDelete({_id:req.params.id})
    .then(player => res.json({player:player}))
    .catch(err => res.json(err)) ; 
}







