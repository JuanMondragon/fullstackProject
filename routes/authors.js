//! import express again
const express =require('express')
const router =express.Router()
//! import the files from model
const Author = require('../models/author')

//! set up the router to our local host
//! res.render our files
// getting our authors route

router.get('/', async (req, res)=>{
    //! inteplating the search option 
    let searchOptions ={}
    //? a GET request sends information as a query while the POST does so through the body.
    if (req.query.name != null && req.query.name !== ''){
        searchOptions.name = new RegExp(req.query.name, 'i')
        // using the 'i' to search for anything not matter the case. basically brings up everything no matter lowercase or uppercase

    }
    try{
        const authors = await Author.find(searchOptions)
        res.render('authors/index', { 
            authors : authors, 
            searchOptions: req.query
        })

    }catch{
        res.redirect('/')

    }
    
})

// add new authors route //! displaying the form 
router.get('/new', (req, res) => {
    res.render('authors/new', { author : new Author()})
})


//! creating the authors route using the post method
router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name
    })
    try{
        //! going to populate the author after it awaits the response
        const newAuthor = await author.save()
         // res.redirect(`authors/${newAuthor.id}`)
         res.redirect('authors')


    }catch{
        res.render('authors/new', {
            author:author,
            errorMessage: 'Error creating Author'

        })
        

    }


   
    
})

//!export the router
module.exports =router