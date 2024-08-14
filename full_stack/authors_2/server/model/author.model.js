const mongoose = require('mongoose') ; 

const AuthorSchame = new mongoose.Schema({
    name:{
        type: String , 
        required:[true,"Name is required"],
        minlength:[3,"Name mus be at least 3 charcaters"],
    }    
},
{timestamps:true} 
)

 const Author = mongoose.model('Author',AuthorSchame) ;
 module.exports = Author ;  