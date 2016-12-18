const Router = require('express').Router()
const Ctrl = require('./controller')

Router.get('/*', function(req, res){
  res.sendFile(Path.join(__dirname, '../public/index.html'))
})

module.exports = Router