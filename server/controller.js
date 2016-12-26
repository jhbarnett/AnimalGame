const { Game } = require('./model')
const http = require('http')
const uuid = require('uuid')

let currentUser = ''

module.exports = {

  createNewGame: (req, res) => {

    const id = uuid().slice(0, 4)
    const game = {
      id,
      animal: req.body.animal,
      player1: req.body.player1,
      player2: req.body.player2,
      questions: [{A: '', Q: ''}],
      count: 0,
      turn: req.body.player2,
      complete: false
    }

    new Game(game).save()
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
    const game = req.body
    Game.findOneAndUpdate({id: game.id}, game)
    .then(game => res.status(200).send(game).end())
  },

  getSingleGame: (req, res) => {
    Game.find({id: req.params.id})
    .then(game => 
      res.status(200).send(game).end())
    .catch(err => console.log(err))
  },

  registerUser: (req, res) => {
    currentUser = req.body.user
    res.status(200).end()
  },

  confirmUser: (req, res) => {
    res.status(200).send(currentUser).end()
  }
}