const router = require('./handles.js')
const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

app.use('/', router)

app.get('*', (req, res) => {
    res.send("-- Error 404 --")
})

app.listen(port, () => {
    console.log("Running on port " + port)
})




 
