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
  },

  find: function(numberId, callback){
    MongoClient.connect(this.url, function(err, db){
      if (db){
        var collection = db.collection('players')
        collection.find({number: numberId}).toArray(function(err, docs){
          callback(docs)
        })
      }
    })
  },

  add: function(player, callback){
    MongoClient.connect(this.url, function(err, db){
      if (db){
        var collection = db.collection('players')
        collection.insert(player)
        collection.find().toArray(function(err, docs){
          callback(docs)
        })
      }
    })
  },

  update: function(numberId, newInfo, callback){
    MongoClient.connect(this.url, function(err, db){
      if (db){
        var collection = db.collection('players')
        collection.update({number: numberId},
          {
            $set: {name: newInfo.name,
              number: newInfo.number,
              positions: newInfo.positions,
              team: newInfo.team}
          })
        collection.find().toArray(function(err, docs){
          callback(docs)
        })
      }
    })
  },

  delete: function(numberId, callback){
    MongoClient.connect(this.url, function(err, db){
      if (db){
        var collection = db.collection('players')
        collection.remove({number: numberId})
        collection.find().toArray(function(err, docs){
          callback(docs)
        })
      }
    })
  }
}

module.exports = PlayersQuery