const Model = require('./model')
const http = require('http')

let animals = []

const options = {
  host: 'en.wikipedia.org',
  path: '/wiki.List_of_animal_names'
}

http.get(options, function(res){
  console.log(res)
})

module.exports = animals