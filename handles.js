const aboutus = require('./content/about.json')
const express = require('express')
const fs = require('fs')
const router = express.Router()
const db = require('./db.js')

router.get('/hello', (req, res) => {
    res.writeHead(300, {'Content-Type': 'text/html'})
    res.end("Hello !")
})

router.get('/hello/:name', (req, res) => {
    res.writeHead(300, {'Content-Type': 'text/html'})
    res.end("Hello "+ req.params.name)
})

router.get('/articles', (req, res) => {
    const searchId = '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b'
    const article = database.db.article.find(article => article.id === searchId)
    res.send(""+article.title)
  })

router.get('/about', (req, res) => {
    /*
    fs.readFile('./content/about.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("Error", err)
            return
        }
        aboutus = JSON.parse(jsonString)
        res.send(aboutus)
    })*/
    res.end(JSON.stringify(aboutus))
    
})

  
module.exports = router;





