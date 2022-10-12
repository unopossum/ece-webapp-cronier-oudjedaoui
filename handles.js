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


module.exports = router;






