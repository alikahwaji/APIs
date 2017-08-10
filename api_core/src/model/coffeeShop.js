import mongoose from 'mongoose'
import Review from './review'
let Schema = mongoose.Schema

let CoffeeShopSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    coffeetype :{
        type: String,
        required: true
    },
    avgcost: Number,
    geometry:{
        type:{type: String, default: 'Point'},
        coordinates: [Number]
    },
    reviews:[{type: Schema.Types.ObjectId, ref: 'Review'}]
})

module.exports = mongoose.model('Coffee Shop', CoffeeShopSchema)