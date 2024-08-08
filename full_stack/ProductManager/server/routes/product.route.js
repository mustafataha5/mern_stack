

const ProductController = require("../controllers/product.controller") ; 

module.exports =(app)=>{
    app.get("/api/products", ProductController.FindAllProducts) ; 
    app.get("/api/products/:id", ProductController.FindProduct) ; 
    app.post("/api/products",ProductController.createProduct) ;
    app.patch("/api/products/:id",ProductController.updateProduct);
    app.delete("/api/products/:id",ProductController.deleteProduct)
}



