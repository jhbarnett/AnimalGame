const { Game } = require('./model')
const http = require('http')

const options = {
  host: 'wikipedia.org',
  path: '/wiki/List_of_animal_names'
}

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
  createNewGame: (req, res) => {
    return new Promise(
      function(reject, resolve){
        console.log('create new game with', req.body.animal)
        const game = {
          id: Number,
          animal: String,
          player1: String,
          player2: String,
          questions: [{Q: String, A: String}],
          count: Number,
          complete: Boolean
        }
        new Game(game).save()
      })
    .then(game => {
      console.log('inserted to db')
      res.status(200).send(game).end()
    })
    .catch(err => {console.log(err)})
  },
  getOpenGames: function(req, res) {
    console.log('got open games server side', openGames)
    
    res.status(200).send(openGames).end()
  }
}