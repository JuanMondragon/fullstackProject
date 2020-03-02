//! singular form of our route "AUTHORS" for good practice

const mongoose = require('mongoose')

//? Schema is a table from mongoose
// so were making the table
//! gotta import mongoose

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }

})


//! export the schema 
// making a new mongoose model titles author then insert the schema 
module.exports =mongoose.model('Author', authorSchema)