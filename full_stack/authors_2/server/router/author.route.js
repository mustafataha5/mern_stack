const AuthorController = require('../controller/author.controller') ; 


module.exports = app => {
    app.get("/api/authors",AuthorController.getAllAuthors);
    app.get("/api/authors/:id",AuthorController.findAuthor); 
    app.post("/api/authors",AuthorController.createAuthor); 
    app.patch("/api/authors/:id",AuthorController.updateAuthor); 
    app.delete("/api/authors/:id",AuthorController.deleteAuthor)
}
