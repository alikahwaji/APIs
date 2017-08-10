import mongoose from 'mongoose'
let Schema = mongoose.Schema

let wineSchema = new Schema ({
    name: String
})

module.exports = mongoose.model('Wine', wineSchema)