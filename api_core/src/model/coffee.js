import mongoose from 'mongoose'
let Schema = mongoose.Schema

let coffeeSchema = new Schema ({
    name: String
})

module.exports = mongoose.model('Coffee', coffeeSchema)