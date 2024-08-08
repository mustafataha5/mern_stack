const {Product} = require("../models/product.model")


//create 
module.exports.createProduct = (req,res) =>{
    Product.create(req.body)
    .then(newProduct => res.json({product:newProduct}))
    .catch(err => res.json(err)); 
}


//get 
module.exports.FindAllProducts = (req,res) =>{
    Product.find({})
    .then(allProduct => res.json({products:allProduct}))
    .catch(err => res.json(err))
}

module.exports.FindProduct = (req,res) => { 
    Product.findOne({_id:req.params.id})
    .then(myProduct => res.json({product:myProduct}))
    .catch(err => res.json(err)) 
}

//update 
module.exports.updateProduct = (req,res) => {
   Product.findByIdAndUpdate({_id:req.params.id},req.body
    ,{new:true,runValidators:true}
   )
   .then(product => res.json({product:product}))
   .catch(err => res.json(err)) ; 
}


//delete 
module.exports.deleteProduct = (req,res) => {
    Product.findByIdAndDelete({_id:req.params.id})
    .then(product => res.json({product:product}))
   .catch(err => res.json(err)) ; 
}
