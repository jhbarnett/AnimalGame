const Express = require('express')
const Path = require('path')
const BodyParser = require('body-parser')
const App = Express()
const Routes = require('./routes')

App.use(BodyParser.json())
App.use(BodyParser.urlencoded({extended: true}))

App.use(Express.static(Path.join(__dirname, '../public')));

const port = process.env.PORT || 8080

const server = App.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})