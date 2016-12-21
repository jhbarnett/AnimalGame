const Router = require('express').Router()
const Path = require('path')
const Ctrl = require('./controller')

Router.get('*', function (req, res){
  res.sendFile(Path.resolve(__dirname, 'public', 'index.html'))
})

Router.post('/api/newGame', (req, res) => Ctrl.createNewGame(req, res))

Router.get('/api/openGames', (req, res) => Ctrl.getOpenGames(req, res))

module.exports = Router