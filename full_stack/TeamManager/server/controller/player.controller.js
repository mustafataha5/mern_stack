const { Player, Game, PlayerGame } = require('../model/palyer.model');


//create
module.exports.findAllPlayer = (req, res) => {
    Player.find({})
        .then(players => res.json({ players: players }))
        .catch(err => res.json(err));
}


module.exports.findPlayer = (req, res) => {
    Player.findById({ _id: req.params.id })
        .then(player => res.json({ player: player }))
        .catch(err => res.json(err));
}


//create 
module.exports.createPlayer = async (req, res) => {
    try {
        // Step 1: Create the player
        const player = await Player.create(req.body);

        // Step 2: Find all games
        const games = await Game.find({});

        // Step 3: Create PlayerGame relationships for each game
        const playerGames = await Promise.all(games.map(async (game) => {
            const playerGame = new PlayerGame({
                player: player._id,
                game: game._id,
                //status: 'active' // Set the default status or any other status you want
            });
            await playerGame.save();

            // Update the references in Game and Player
            game.players.push(playerGame._id);
            player.games.push(playerGame._id);

            return playerGame;
        }));

        // Save the updated game and player documents
        await player.save();
        await Promise.all(games.map(game => game.save()));

        // Respond with the created player and the associated PlayerGames
        res.json({ player: player, playerGames: playerGames });
    } catch (err) {
        res.status(400).json(err);
    }
};

//delete
module.exports.deletePlayer = (req, res) => {
    // console.log(""+req.params.id)
    Player.findByIdAndDelete({ _id: req.params.id })
        .then(player => res.json({ player: player }))
        .catch(err => res.json(err));
}

//update 
module.exports.updatePlayer = (req, res) => {
    Player.findByIdAndUpdate({ _id: req.params.id },
        req.body
        , { new: true, runValidators: true }
    )
        .then(player => res.json({ player: player }))
        .catch(err => res.status(400).json(err));
}




module.exports.createGame = (req, res) => {
    Game.create(req.body)
        .then(game => res.json({ game: game }))
        .catch(err => res.status(400).json(err));
}















