const Express = require('express')
const Path = require('path')
const BodyParser = require('body-parser')
const App = Express()
const Routes = require('./routes')

const assetFolder = Path.resolve(__dirname, '../public')

App.use(BodyParser.json())

App.use(BodyParser.urlencoded({extended: true}))

App.get('/*', function(req, res){
  res.sendFile(assetFolder + '/index.html')
})

const port = process.env.PORT || 8080

App.listen(port)

console.log(`Listening on port ${port}...`)
