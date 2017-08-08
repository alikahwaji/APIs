import mongoose from 'mongoose'
import {Router} from 'express'
import Coffee from '../model/coffee'

export default ({config ,db}) => {
    let api = Router()


    // CRUD





    //coffee/add
    api.post('/add' ,(req,res) => {
        let newCoffee = new Coffee()
        newCoffee.name = req.body.name


        newCoffee.save(err=> {
            if(err) {
                res.send(err)
            }
            res.json({message: 'Coffee Upload successfully'})
        })
    })

    // /coffee -READ
    api.get('/', (req,res)  => {
        Coffee.find({}, (err, coffees) => {
            if (err) {
                res.send(err)
            }
            res.json(coffees)
        }) 
    })

    api.get('/:id', (req,res) => {
        Coffee.findById(req.params.id, (err,coffee) =>{
            if(err) {
                res.send(err)
            }
            res.json(coffee)
        })
    })
    return api
}