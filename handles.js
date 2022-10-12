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


/*
module.exports = {
    serverHandle: function (req, res) {
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
        
        res.writeHead(200, {'Content-Type': 'text/plain'});
        switch (path) {
            case '/':
                res.end('You need to enter "/hello" and a name, so this text would be "hello [name] !')
                break;
            case '/hello':
                if ('name' in params && (["Tim","Sami"].includes(params.name))) res.end('Hello, I\'m Tim and I\'m 20 years old.')
                else res.end('Hello '+ params.name)
                break;
            case '/about':
                res.end(JSON.stringify(aboutus))
                break;
            default:
                res.end("Error 404 : route not found")    
        }
    }   
}


// fs.readFile("./about.json", "utf8", callback(err, jsonString))

function callback(err, jsonString) {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    res.writeHead(200, {'Content-Type': 'application/json'})
    aboutus = JSON.parse(jsonString)
    console.log(typeof aboutus)
    res.write(JSON.stringify(aboutus))
}

*/
module.exports = router






