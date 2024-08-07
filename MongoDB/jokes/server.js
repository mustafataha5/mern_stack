

const express = require('express') ; 
const app = express() ; 
require("dotenv").config();
const port  = process.env.PORT ; 
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const jokeRoutes = require("./routes/joke.route") 
jokeRoutes(app)

app.listen(port,()=>console.log(`Listening on port: ${port}`))







