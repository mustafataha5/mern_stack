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
    .then(deletedPlayer => {
        if (!deletedPlayer) {
            return res.status(404).json({ message: "Player not found" });
        }

        // Step 2: Find and remove all PlayerGame documents associated with this player
        return PlayerGame.deleteMany({ player: playerId })
            .then(deletedPlayerGames => {
                // Step 3: Find all games that referenced these PlayerGame documents and remove the references
                return Game.updateMany(
                    { players: { $in: deletedPlayerGames._id } },
                    { $pull: { players: { $in: deletedPlayerGames._id } } }
                )
                .then(() => {
                    res.json({ message: "Player and related data deleted successfully" });
                });
            });
    })
    .catch(err => {
        res.status(400).json(err);
    });
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

module.exports.deleteGame = (req, res) => {
    Game.findByIdAndDelete({ _id: req.params.id })
        .then(game => res.json({ game: game }))
        .catch(err => res.status(400).json(err));
}


module.exports.findAllGame = (req, res) => {
    Game.find({})
        .then(games => res.json({ games: games }))
        .catch(err => res.json(err));
}
module.exports.findAllGameID = (req, res) => {
    Game.find({})
        .then(games => res.json( games.map( game =>  game._id)) )
        .catch(err => res.json(err));
}

module.exports.getPlayersOfGame = (req, res) => {

    Game.findById({ _id: req.params.id })
        .populate({
            path: 'players', // Populate the players field (which references PlayerGame)
            populate: {
                path: 'player', // Within PlayerGame, populate the player field
                model: 'Player'
            }
        })
        .then(game => res.json({ players: game.players }))
        .catch(err => res.json(err));
};


module.exports.getPlayersOfGame1 = (req, res) => {
    Game.findById(req.params.id)
        .populate({
            path: 'players', // Populate the players field
            populate: {
                path: 'player', // Populate the player field within PlayerGame
                model: 'Player'
            }
        })
        .then(game => {
            if (!game) {
                return res.status(404).json({ message: 'Game not found' });
            }

            // Map players to include player details and their status
            const playersWithStatus = game.players.map(pg => ({
                player: pg.player,    // Player details
                status: pg.status    // Status
            }));

            res.json({ players: playersWithStatus });
        })
        .catch(err => res.status(400).json(err));
};

module.exports.updatePlayerStatus = (req, res) => {
    const { id, gameId } = req.params;
    const { status } = req.body;
//     console.log(status)
//     console.log(typeof(status))
//     // Convert string to array of strings
// const arrayOfStrings = JSON.parse(status.replace(/'/g, '"'));

// // Convert array of strings to array of booleans
// const arrayOfBooleans = arrayOfStrings.map(str => ( str === true ));
    // Find the PlayerGame document for the specific player and game
    //console.log(arrayOfBooleans)
    PlayerGame.findOneAndUpdate(
        { player: id, game: gameId },  // Search criteria
        {status:status},  // The field to update
        { new: true, runValidators: true }  // Options: return the updated document and run validators
    )
    .then(updatedPlayerGame => {
        if (!updatedPlayerGame) {
            return res.status(404).json({ message: "Player or game not found" });
        }
        res.json({ message: "Player status updated successfully", playerGame: updatedPlayerGame });
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

module.exports.getPlayerStatus = (req, res) => {
    const { id, gameId } = req.params;
    // Find the PlayerGame document for the specific player and game
    PlayerGame.findOne({ player:id, game: gameId })
        .then(playerGame => {
            if (!playerGame) {
                // Return a 404 if no matching document is found
                return res.status(404).json({ message: "Status not found for the given player and game" });
            }
            res.json({ status: playerGame.status });
        })
        .catch(err => {
            res.status(400).json(err);
        });
};


module.exports.getPlayersAndStatusByGameId = (req, res) => {
    const gameId = req.params.gameId; // Extract the gameId from request parameters

    PlayerGame.aggregate([
        {
            $match: { game: mongoose.Types.ObjectId(gameId) } // Match documents for the specific game
        },
        {
            $lookup: {
                from: 'players',        // The collection name for Player
                localField: 'player',
                foreignField: '_id',
                as: 'playerInfo'
            }
        },
        {
            $unwind: '$playerInfo'
        },
        {
            $project: {
                _id: 0,
                player: '$playerInfo.name',
                status: 1
            }
        }
    ])
    .then(players => {
        res.json(players);
    })
    .catch(err => {
        res.status(400).json({ message: "Error fetching players with status", error: err.message });
    });
};



