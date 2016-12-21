const { Game } = require('./model')
const http = require('http')
const uuid = require('uuid')

// const options = {
//   host: 'wikipedia.org',
//   path: '/wiki/List_of_animal_names'
// }

module.exports = {
  // getAnimalNames: function() {
  //   http.get(options, function(response){
      
  //     response.on('data', function(chunk){
  //       console.log('data', chunk)
  //     })
  //     response.on('end', function(){
  //       console.log('end')
  //     })
  //   })
  // },
  createNewGame: (req, res) => {

    const id = uuid().slice(0, 4)
    const game = {
      id,
      animal: req.body.animal,
      player1: 'Jason',
      player2: 'Olivia',
      questions: [],
      count: 0,
      complete: false
    }

    new Game(game).save()
    .then(suc => console.log(suc))
    .catch(err => console.log(err))

    res.status(200).send(game).end()
  },
  getOpenGames: (req, res) => {
    Game.find({complete: false})
    .then(openGames => 
      res.status(200).send(openGames).end())
    .catch(err => console.log(err))
  },
  updateGame: (req, res) => {
    const game = {
      id: req.body.id,
      animal: req.body.animal,
      player1: req.body.player1,
      player2: req.body.player1,
      questions: req.body.questions,
      count: req.body.questions.length,
      complete: false 
    }
    Game.findOneAndUpdate(game)
    .then(game => res.status(200).send(game).end())
  }
}