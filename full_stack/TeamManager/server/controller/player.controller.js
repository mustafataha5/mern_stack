const Player = require('../model/palyer.model') ; 


//create
module.exports.findAllPlayer = (req,res) => {
    Player.find({})
    .then(players => res.json({players:players}))
    .catch(err => res.json(err)) ; 
}


module.exports.findPlayer = (req,res) => {
    Player.findById({_id:req.params.id})
    .then(player => res.json({player:player}))
    .catch(err => res.json(err)) ; 
} 


//create 
module.exports.createPlayer = (req,res) => {
    Player.create(req.body)
    .then(player => res.json({player:player}))
    .catch(err => res.status(400).json(err)) ; 
} 

//delete
module.exports.deletePlayer = (req,res) =>{
   // console.log(""+req.params.id)
    Player.findByIdAndDelete({_id:req.params.id})
    .then(player => res.json({player:player}))
    .catch(err => res.json(err)) ;
}

//update 
module.exports.updatePlayer = (req,res)=>{
    Player.findByIdAndUpdate({_id:req.params.id},
        req.body
        ,{new:true,runValidators: true}
    )
    .then(player => res.json({player:player}))
    .catch(err => res.status(400).json(err)) ;
}




















