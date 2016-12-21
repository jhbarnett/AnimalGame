const Model = require('./model')
const http = require('http')

const options = {
  host: 'wikipedia.org',
  path: '/wiki/List_of_animal_names'
}

const openGames = []

module.exports = {
  getAnimalNames: function() {
    http.get(options, function(response){
      
      response.on('data', function(chunk){
        console.log('data', chunk)
      })
      response.on('end', function(){
        console.log('end')
      })
    })
  },
  createNewGame: function(req, res) {
    console.log('create new game with', req.body.animal)
    const game = {
      animal: req.body.animal,
      player1: null,
      player2: null,
      qCount: 0
    }
    openGames.unshift(game)
    console.log('added to open games server side', openGames[0])
    res.status(200).send(game).end()
  },
  getOpenGames: function(req, res) {
    console.log('got open games server side', openGames)
    res.status(200).send(openGames).end()
  }

}

// module.exports.getAnimalNames()