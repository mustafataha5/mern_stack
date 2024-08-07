const mongoose = require('mongoose')
// const mongoose = require('mongoose');



const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true,"Setup is required"], 
        minlength: [4,"Setup must be at leasr 4 characters long"] 
    },
    punchline:{
        type: String , 
        required: [true,"Punchline is required"], 
        minlength: [3,"Punchline must be at leasr 3 characters long"] 
    }},
    {timestamps: true}
); 


const Joke = mongoose.model("Joke",JokeSchema) ; 

module.exports =  Joke ; 