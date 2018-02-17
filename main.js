//Server 
const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const api = require('./apiHelpers')
const url = require('url')


let app = express()

app.use(bodyparser.json())
app.use(express.static(__dirname + '/distribution'))

app.get('/search', (req, res) => {
  let {location, keywords, isFulltime} = req.query

  console.log(req.query)

  api.gitHub(location, keywords, isFulltime)
  .then((jobs)=> {
    res.send(jobs.data)
  })
  .catch((err)=> {
    console.log(err)
    res.sendStatus(500)
  })
})

app.get('/foods', (req, res) => {
  api.getFoods(req.query.job)
  .then((job) => {
    res.send(job.foods)
  })
})

app.get('/favs', (req, res) => {

})

app.post('/favs', (req, res) => {

})


var port = process.env.PORT || 8080

app.listen(port, () => {
  console.log('Listneing on ', port)
})