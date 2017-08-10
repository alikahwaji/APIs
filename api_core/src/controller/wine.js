import mongoose from 'mongoose'
import {Router} from 'express'
import Wine from '../model/wine'

export default ({config ,db}) => {
    let api = Router()


    // CRUD

    //coffee/add
    api.post('/add' ,(req,res) => {
        let newWine = new Wine()
        newWine.name = req.body.name


        newWine.save(err=> {
            if(err) {
                res.send(err)
            }
            res.json({message: 'Wine Upload successfully'})
        })
    })

    // Wine-READ
    api.get('/', (req,res)  => {
        Wine.find({}, (err, wines) => {
            if (err) {
                res.send(err)
            }
            res.json(wines)
        }) 
    })

    api.get('/:id', (req,res) => {
        Wine.findById(req.params.id, (err,wine) =>{
            if(err) {
                res.send(err)
            }
            res.json(wine)
        })
    })

    // v1/coffee/:id - update
    api.put('/:id', (req,res) => {
        Wine.findById(req.params.id, (err,Wine) => {
            if(err) {
                res.send(err)
            }
            wine.name =req.body.name
            wine.save(err =>{
                if(err){
                    res.send(err)
                }
                res.json({message:'wine information update'})
            })
        })
    })
    api.delete('/:id', (req,res)=> {
        Wine.remove({
            _id: req.params.id
        }, (err,wine) => {
            if(err) {
                res.send(err)
            } 
            res.json({message: 'Wine Removed'})
        
        })
    })
    return api
}