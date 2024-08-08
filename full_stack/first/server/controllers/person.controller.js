

const {Person} = require("../models/person.model") ; 

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}



//create Person 
module.exports.createPerson = (req,res) => {
    // console.log(req.body);
    Person.create(req.body) 
    .then( newPerson => {

        res.json(newPerson);
    })
    .catch(err => {
        res.json(err) ; 
    });
    
}

//get Person/s
module.exports.findAllPersons = (req,res)=>{
    Person.find({})
    .then(allUsers => {
        res.json({users:allUsers}) ;
    })
    .catch(err => res.json(err))
} 

module.exports.getPerson = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}
//update 

module.exports.updatePerson = (req,res) => {
    Person.findByIdAndUpdate({_id:req.params.id},req.body, {new:true,runValidators:true})
    .then(editPerson => {
        //console.log(">>>>>"+req.body);
        res.json(editPerson)} )
    .catch(err => res.json(err));
}
//delete 
module.exports.deletePerson = (req,res) => {
    Person.findByIdAndDelete({_id:req.params.id})
    .then(deletedPerson => {
        //console.log(">>>>>"+req.body);
        res.json(deletedPerson)} )
    .catch(err => res.json(err));

}



