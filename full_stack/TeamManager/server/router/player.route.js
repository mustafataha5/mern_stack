const PlayerController = require('../controller/player.controller'); 


module.exports=app => {
    app.get('/api/players',PlayerController.findAllPlayer); 
    app.post('/api/players',PlayerController.createPlayer);
    app.get('/api/players/:id',PlayerController.findPlayer); 
    app.patch('/api/players/:id',PlayerController.updatePlayer)
    app.delete('/api/players/:id',PlayerController.deletePlayer) 
}
















