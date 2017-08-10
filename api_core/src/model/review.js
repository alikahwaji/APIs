import mongoose  from 'mongoose' 
import CoffeeShop from './coffeeShop'

let Schema = mongoose.Schema

 let ReviewSchema = new Schema ({
     title: {
         type: String,
         required : true
     },
        text: String, 
        coffeeShop: {
            type: Schema.Types.ObjectId,
            ref: 'CoffeeShop',
            required: true
        }
 })

 module.exports = mongoose.model('Review' , ReviewSchema)