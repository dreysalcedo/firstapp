// express provides the ability to create routes without initializing http, creating server, and etc
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


const app = express();
const PORT = 4000; 

//bodyParser runs every request
app.use(bodyParser.json());

//import routes
const postsRoute=require('./routes/posts');
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res)=>{
    res.send('Home');
});

//Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, 
    () => {
    console.log('Succesfully connected to DB!')
});


//how to start to listen in the server or port
app.listen(PORT);

