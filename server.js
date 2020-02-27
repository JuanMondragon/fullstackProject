if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
//!import express into our app

const express = require('express')
const app =express()
const expressLayouts = require('express-ejs-layouts')

//! import mongoose 
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useCreateIndex:true, useUnifiedTopology: true,  useNewUrlParser: true})
const db = mongoose.connection 
db.on('error', error => console.error(error))
db.once('open', () => console.log("connected to mongoose"))

//!import our router to the server file './' just means relative to this folder 

const indexRouter = require('./routes/index')

//! setting up the view engine , ejs is our engine
app.set('view engine', 'ejs')

//! set where our views are coming from
app.set('views', __dirname + '/views')
//!set our layout for html
app.set('layout', 'layouts/layout')
//! tell express to use express layouts
app.use(expressLayouts)
//!our public files , css,js, imgs
app.use(express.static('public'))

//! telling out router which route to use
app.use('/', indexRouter)

//! heroku port listen

app.listen(process.env.PORT || 3000)
