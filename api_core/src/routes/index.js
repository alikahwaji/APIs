import express from 'express'
import config from '../config'
import middleware from '../middleware'
import initializeDb from '../db'
import coffeeShop from '../controller/coffeeShop'

let router = express()

//connect to db

initializeDb (db =>{

    // internal middleware
    router.use(middleware({config,db}))

    //api routes v1 
    router.use('/coffeeShop',coffeeShop({config, db}))
})

export default router

