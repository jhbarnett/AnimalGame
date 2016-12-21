const Router = require('express').Router()
const Path = require('path')
const Ctrl = require('./controller')

Router.post('/api/newGame', (req, res) => Ctrl.createNewGame(req, res))

Router.get('/api/openGames', (req, res) => Ctrl.getOpenGames(req, res))

Router.put('/api/updateGame/:id', (req, res) => {})

Router.get('/api/play/:id', (req, res) => Ctrl.getSingleGame(req, res))

module.exports = Router