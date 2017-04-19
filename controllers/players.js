var express = require('express')
var playersRouter = express.Router()
var PlayersQuery = require('../db/PlayersQuery.js')
var playersQuery = new PlayersQuery()

playersRouter.get('/', function(req, res){
  playersQuery.all(function(docs){
    res.json(docs)
  })
})

playersRouter.get('/:id', function(req, res){
  playersQuery.find(parseInt(req.params.id), function(docs){
    res.json(docs)
  })
})

playersRouter.post('/', function(req, res){
  var player = {
    name: req.body.name,
    number: parseInt(req.body.number),
    positions: req.body.positions.split(','),
    team: req.body.team
  }

  playersQuery.add(player, function(docs){
    res.json(docs)
  })
})

playersRouter.put('/:id', function(req, res){
  var newInfo = {
    name: req.body.name,
    number: parseInt(req.body.number),
    positions: req.body.positions.split(','),
    team: req.body.team
  }

  playersQuery.update(parseInt(req.params.id), newInfo, function(docs){
    res.json(docs)
  })
})

playersRouter.delete('/:id', function(req, res){
  
  playersQuery.delete(req.params.id, function(docs){
    res.json(docs)
  })
})


module.exports = playersRouter