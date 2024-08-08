const express = require('express');
const app = express();
const cors = require('cors') // This is new
require('dotenv').config();
const port = process.env.PORT;
   
require('./config/mongoose.congih'); // This is new
// Middleware
app.use(cors({
}));
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new

const myroutes =require('./routes/person.routes');
myroutes(app); // This is new
app.listen(port, () => console.log(`Listening on port: ${port}`) );
