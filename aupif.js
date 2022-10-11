const express = require('express')
const app = express()
const port = 8080
const database = require('./db.js')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hello', (req, res) => {
  res.send('Hello buddy !')
})

app.get('/hello/:name', (req, res) => {
  res.send("Hello " + req.params.name)
})


app.get('/articles', (req, res) => {
  const searchId = '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b'
  const article = database.db.article.find(article => article.id === searchId)
  res.send(""+article.title)
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})