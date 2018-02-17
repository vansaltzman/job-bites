//Server 
const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const url = require('url')



let app = express()

app.use(bodyparser.json())
app.use(express.static(__dirname + '/distribution'))

app.get('/search', (req, res) => {
  
})

app.get('/favs', (req, res) => {

})

app.post('/favs', (req, res) => {

})


var port = process.env.PORT || 8080

app.listen(port, () => {
  console.log('Listneing on ', port)
})