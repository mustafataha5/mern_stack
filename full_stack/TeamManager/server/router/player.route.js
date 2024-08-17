const PlayerController = require('../controller/player.controller'); 
const Db = require('../controller/dropDB.controller') ; 

module.exports=app => {
    app.get('/api/players',PlayerController.findAllPlayer); 
    app.post('/api/players',PlayerController.createPlayer);
    app.get('/api/players/:id',PlayerController.findPlayer); 
    app.patch('/api/players/:id',PlayerController.updatePlayer)
    app.delete('/api/players/:id',PlayerController.deletePlayer) 
    app.post('/api/games',PlayerController.createGame); 
    app.get('/api/games',PlayerController.findAllGame)
    app.get('/api/gamesId',PlayerController.findAllGameID)
    app.get('/api/games/player/:id',PlayerController.getPlayersOfGame1); 
    app.delete('/api/games/:id',PlayerController.deleteGame);
    app.get('/api/games/player/:id/:gameId',PlayerController.getPlayerStatus);
    app.patch('/api/games/player/:id/:gameId',PlayerController.updatePlayerStatus);
    app.delete('/api/DB',Db.dropDatabase); 
}
















