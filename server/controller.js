const Model = require('./model')
const http = require('http')

const options = {
  host: 'wikipedia.org',
  path: '/wiki/List_of_animal_names'
}

module.exports = {
  getAnimalNames: function() {
    http.get(options, function(response){
      
      response.on('data', function(chunk){
        console.log('data', chunk)
      })
      response.on('end', function(){
        console.log('end')
      })
    })
  }
}

// module.exports.getAnimalNames()