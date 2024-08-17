const Player= require('../models/player.model')
const Game = require('../models/game.model');
const PlayerGame = require('../models/playerGame.mode');



//get read
module.exports.playerStatus = (req,res)=>{
    const {playerId,gameId} = req.params ; 

    PlayerGame.find({player:playerId,game:gameId})
    .then(status => res.json({status:status}))
    .catch(err => res.json(err)) ; 

}

module.exports.allPalyersStatusByGame = (req,res)=>{
    const {gameId} = req.params ; 

    PlayerGame.find({game:gameId})
    .populate('player', 'name') // Populate the 'player' field with only the 'name' attribute
    .then(status => res.json({status:status}))
    .catch(err => res.json(err)) ; 

}

//update 
module.exports.playerStatusUpdate = (req,res)=>{
    const {playerId,gameId} = req.params ; 
    const {status} = req.body ; 
    //const statusArray = status.split(',').map(val => val == true);
    PlayerGame.findOneAndUpdate({player:playerId,game:gameId}
        , { status: status }
        ,{new:true,runValidtor:true})
    .then(status => res.json({status:status}))
    .catch(err => res.json(err)) ; 
}