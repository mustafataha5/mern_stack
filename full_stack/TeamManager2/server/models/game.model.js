const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
    name:{
        type: String , 
        required:[true,"Game name is required ."], 
        unique: [true,"This game name is already used"]
    },
},{
    timetamps:true , 
}
)


const Game = mongoose.model('Game',gameSchema) ; 
module.exports=Game ; 