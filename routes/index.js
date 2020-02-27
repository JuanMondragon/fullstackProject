//! import express again
const express =require('express')
const router =express.Router()

//! set up the router to our local host
//! res.render our files
router.get('/', (req, res)=>{
    res.render('index')
})

//!export the router
module.exports =router