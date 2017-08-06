var mongoose = require ('mongoose')
var Schema = mongoose.Schema

var MovieSchema = new Schema ({
    title: String,
    genre: String,
    year: String
})

module.exports = mongoose.model('Movie', MovieSchema)