require('dotenv').config()
const Express = require('express')
const Path = require('path')
const BodyParser = require('body-parser')
const App = Express()
var HTTP = require('http').Server(App)
const Routes = require('./routes')
const { DB } = require('./model')

App.use(BodyParser.json())
App.use(BodyParser.urlencoded({extended: true}))

App.use(Express.static(Path.join(__dirname, '../public')));

App.use('/', Routes)

const port = process.env.PORT || 8080

const server = HTTP.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})