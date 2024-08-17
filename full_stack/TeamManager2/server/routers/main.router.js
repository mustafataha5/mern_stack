


const PlayerController = require('../controllers/player.controller') ; 
const GameController = require('../controllers/game.controller');
const MainController = require('../controllers/main.controller');

module.exports = app => {
    //player
    app.post("/api/players",PlayerController.playerCreate);
    app.get("/api/players",PlayerController.playerFindAll);
    app.get("/api/players/:id",PlayerController.playerFindOne);
    app.patch("/api/players/:id",PlayerController.playerUpdate);
    app.delete("/api/players/:id",PlayerController.playerDelete);

    //game
     app.post("/api/games",GameController.GameCreate);
     app.get("/api/games",GameController.gameFindAll);
     app.get("/api/games/:id",GameController.gameFindOne);
     app.patch("/api/games/:id",GameController.gameUpdate);
     app.delete("/api/games/:id",GameController.gameDelete);

     //playergame
     app.get("/api/playergame/:gameId",MainController.allPalyersStatusByGame);
     app.get("/api/playergame/:playerId/:gameId",MainController.playerStatus);
     app.patch("/api/playergame/:playerId/:gameId",MainController.playerStatusUpdate);

    //  //dropDB 
    //  app.delete("/api/DBMustafa",DB.dropDatabase)
    
}


