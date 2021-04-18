const mongoose = require('mongoose');
const Schema = mongoose.Schema

const dishSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        default: "No description"
    }  
})

module.exports = new mongoose.model('Dish',dishSchema);