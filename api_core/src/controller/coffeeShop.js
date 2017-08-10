import mongoose from 'mongoose'
import {Router} from 'express'
import CoffeeShop from '../model/coffeeShop'

export default ({config ,db}) => {
    let api = Router()


    // CRUD





    //coffee/add
    api.post('/add' ,(req,res) => {
        let newCoffeeShop = new CoffeeShop()
        newCoffeeShop.name = req.body.name


        newcoffeeShop.save(err=> {
            if(err) {
                res.send(err)
            }
            res.json({message: 'Coffee Shop Upload successfully'})
        })
    })

    // /coffeeShop -READ
    api.get('/', (req,res)  => {
        coffeeShop.find({}, (err, coffeeShops) => {
            if (err) {
                res.send(err)
            }
            res.json(coffeeShops)
        }) 
    })

    api.get('/:id', (req,res) => {
        coffeeShop.findById(req.params.id, (err,coffeeShop) =>{
            if(err) {
                res.send(err)
            }
            res.json(coffeeShop)
        })
    })

    // v1/coffeeShop/:id - update
    api.put('/:id', (req,res) => {
        coffeeShop.findById(req.params.id, (err,coffeeShop) => {
            if(err) {
                res.send(err)
            }
            coffeeShop.name =req.body.name
            coffeeShop.save(err =>{
                if(err){
                    res.send(err)
                }
                res.json({message:'Coffee Shop information update'})
            })
        })
    })
    api.delete('/:id', (req,res)=> {
        coffeeShop.remove({
            _id: req.params.id
        }, (err,coffeeShop) => {
            if(err) {
                res.send(err)
            } 
            res.json({message: 'Coffee Shop Removed'})
        
        })
    })
    return api
}