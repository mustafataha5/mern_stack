

const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name:{
        type:String , 
        required: [true,"Player Name is required"],
        minlength:[3,"Player Name must be at least 3 Charaters."]  
    },
    position:{
        type:String , 
        required: [true,"Position Player is required"],
        minlength:[1,"Player Name must be at least One Charater."]
    }
},
{timesstamps:true}
)

const Player = mongoose.model('Player',playerSchema) ; 

module.exports = Player ;










