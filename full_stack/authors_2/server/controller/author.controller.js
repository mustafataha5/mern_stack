const Author = require('../model/author.model')



//find and get 
module.exports.findAllAuthors = (req,res) => {
    Author.find({})
    .then(allAuthors => res.json({authors:allAuthors}))
    .catch(err => res.json(err)) ; 
}

module.exports.findOneAuthor = (req,res) => {
    Author.findOne({_id:req.params.id})
    .then(author => res.json({author:author}))
    .catch(err => res.json(err)) ; 
}


//create 
module.exports.createAuthor = (req,res) => {
    Author.create(req.body)
    .then(author => res.json({author:author}))
    .catch(err => res.json(err)) ; 
}

//update 
module.exports.updateAuthor = (req,res) => {
    Author.findByIdAndUpdate({_id:req.params.id}
        ,req.body,{new:true,runValidator:true})
        .then(author => res.json({author:author}))
        .catch(err => res.json(err));
}

//delete 
module.exports.deleteAuthor = (req,res) =>{
    Author.findByIdAndDelete({_id:req.params.id}
        ,req.body,{new:true,runValidator:true})
        .then(author => res.json({author:author}))
        .catch(err => res.json(err));
}

