const Router = require('express').Router()
const Path = require('path')
const Ctrl = require('./controller')


Router.get('*', function (req, res){
    res.sendFile(Path.resolve(__dirname, 'public', 'index.html'))
})

module.exports = Router