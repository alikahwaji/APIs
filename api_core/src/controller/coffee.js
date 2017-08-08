import mongoose from 'mongoose'
import {Router} from 'express'
import Coffee from '../model/coffee'

export default ({config ,db}) => {
    let api = Router()

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
    return api
}