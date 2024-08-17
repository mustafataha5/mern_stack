const Game= require('../models/game.model')




//create 
module.exports.GameCreate = (req,res) =>{
    Game.create(req.body)
    .then(game => res.json({game:game}))
    .catch(err => res.status(400).json(err)) ; 
}

//get 
module.exports.gameFindAll = (req,res) =>{
    Game.find({})
    .then(games => res.json({games:games}))
    .catch(err => res.json(err)) ; 
}

module.exports.gameFindOne = (req,res) =>{
    Game.findById({_id:req.params.id})
    .then(game => res.json({game:game}))
    .catch(err => res.json(err)) ; 
}

//update 
module.exports.gameUpdate = (req,res) =>{
    Game.findByIdAndUpdate({_id:req.params.id}
        ,req.body 
        ,{new:true,runValidtor:true}
    )
    .then(game => res.json({game:game}))
    .catch(err => res.status(400).json(err)); 
}

//delete 
module.exports.gameDelete = (req,res) =>{
    Game.findByIdAndDelete({_id:req.params.id})
    .then(game => res.json({game:game}))
    .catch(err => res.json(err)) ; 
}







