const Author = require('../model/author.model') ; 



module.exports.createAuthor = (req,res)=>{
    Author.create(req.body)
    .then(newAuthor => res.json(newAuthor))
    .catch(err => res.status(400).json(err) );
}

//get 
module.exports.getAllAuthors = (req,res) => {
    Author.find()
    .then(authors => res.json({authors:authors}))
    .catch(err => res.json(err)) ; 
}

module.exports.findAuthor = (req,res) => {
    Author.findOne({_id:req.params.id})
    .then(author => res.json({author:author}))
    .catch(err => res.json(err)) ; 
}

//update
module.exports.updateAuthor = (req,res) => {
    Author.findByIdAndUpdate({_id:req.params.id}
        ,req.body 
        ,{new:true,runValidators:true}
    ).then(auhtor => res.json(auhtor))
    .catch(err => res.status(400).json(err)) ; 
}
//delete
module.exports.deleteAuthor = (req,res) => {
    Author.findByIdAndDelete({_id:req.params.id})
    .then(auhtor => res.json(auhtor))
    .catch(err => res.json(err)) ; 
}
