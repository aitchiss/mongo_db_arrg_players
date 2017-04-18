var MongoClient = require('mongodb').MongoClient

var PlayersQuery = function(){
  this.url = 'mongodb://localhost:27017/arrg_players'
}

PlayersQuery.prototype = {
  all: function(callback){
    MongoClient.connect(this.url, function(err, db){
      if (db){
        var collection = db.collection('players')
        collection.find().toArray(function(err, docs){
          callback(docs)
        })
      }
    })
  }
}

module.exports = PlayersQuery