const mongoose = require('mongoose') ; 


const AuthorSchema = mongoose.Schema({
    name:{
        type: String  , 
        required : [true,"Name is Required."] , 
        minlength: [3,"Name must be at least 3 charcters."],
    }   
},
{timestamps:true}
)



const Author = mongoose.model('Author',AuthorSchema) ; 
module.exports = Author ; 

