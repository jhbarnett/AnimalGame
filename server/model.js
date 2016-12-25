const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const DB = mongoose.connect(
  `mongodb://${process.env.DBUSER}:${process.env.DBPASSWORD}@${process.env.DBHOST}:41108/${process.env.DBNAME}`)
const Schema = mongoose.Schema

const gameSchema = new Schema({
  id: String,
  animal: String,
  player1: String,
  player2: String,
  questions: [{Q: String, A: String}],
  count: Number,
  turn: String,
  complete: Boolean
})

const Game = mongoose.model('Game', gameSchema)

module.exports = {
  Game,
  DB
}