const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true },
    function(err){
        if(err) console.log(err);
        else console.log("MongoDB Connected");
    }
)