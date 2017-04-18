var express = require('express')
var playersRouter = express.Router()
var PlayersQuery = require('../db/PlayersQuery.js')
var playersQuery = new PlayersQuery()

playersRouter.get('/', function(req, res){
  playersQuery.all(function(docs){
    res.json(docs)
  })
})


module.exports = playersRouter