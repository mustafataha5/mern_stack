const express = require('express') ; 

const app = express() ; 

require('dotenv').config() ;
const cors = require('cors') // This is new
const port = process.env.PORT;

// Middleware
app.use(cors({
}));
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new



require('./config/mongoose.config');
require('./router/player.route')(app) ; 

app.listen(port, () => console.log(`Listening on port: ${port}`) );