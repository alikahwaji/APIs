import mongoose from 'mongoose'
let Schema = mongoose.Schema

let wineSchema = new Schema ({
    name: String,
    type: String,
    year: String,
    winery: String
})

module.exports = mongoose.model('Wine', wineSchema)