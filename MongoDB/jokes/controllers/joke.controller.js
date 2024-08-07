const Joke = require("../models/joke.model") ; 



//
module.exports.findAllJokes = (req,res) => {
        Joke.find()
        .then( (allJokes) => {
            res.json({jokes:allJokes}) ; 
        })
        .catch((err)=>{
            res.json(err) ; 
        });
} 

module.exports.findJokeById = (req,res) => {
        Joke.findOne({_id:req.params.id})
        .then( (joke) => {
            res.json({joke:joke}) ; 
        } )
        .catch((err)=>{
            res.json(err) ; 
        });
}

//create  Joke ; 
module.exports.createJoke = (req,res) => {
    console.log(req.body);
    Joke.create(req.body)
    .then((newUser) => {
          console.log(newUser);
            res.json({user:newUser}) ; 
    })
    .catch((err)=>{
        // console.log("------"+err);
        res.json(err) ; 
    });

} 
//update 
module.exports.updateJokeById = (req,res) => {
    Joke.findByIdAndUpdate({_id:req.params.id}
        , req.body,
        { new: true, runValidators: true }
    )
    .then(updatedUser => {
        res.json({user:updatedUser}) ; 
    })
    .catch((err)=>{
      //  console.log("------"+err);
        res.json(err) ; 
    });
}

//delete 
module.exports.deleteJokeById = (req,res) =>{
     Joke.deleteOne({_id:req.params.id})
     .then(deletedUser => {
        res.json({user:deletedUser});
     })
     .catch((err)=>{
        //  console.log("------"+err);
          res.json(err) ; 
      });
}