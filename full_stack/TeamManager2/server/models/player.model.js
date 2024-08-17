const mongoose = require('mongoose')


const playerSchema = mongoose.Schema({
    name:{
        type: String , 
        required:[true,"Player name is required ."], 
        minlength:[3,"Player name must be at least 3 charcters ."]
    },
    position:{
        type: String , 
        required:[true,"Player Position is required ."], 
        minlength:[2,"Player Position must be at least 2 charcters ."]
    }
},{
    timetamps:true , 
}
)

const Player = mongoose.model('Player',playerSchema) ; 
module.exports=Player ; 
