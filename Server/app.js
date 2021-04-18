const express = require('express');

require('dotenv').config();
require('./db/connection');

const dishRouter = require('./routes/dishes');
const app = express();

app.use('/dishes',dishRouter);

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.listen(process.env.PORT,(err)=>{
    if(err) console.log(err);
    else console.log("Server running on Port: " + process.env.PORT);
})