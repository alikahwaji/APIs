import express from 'express'
import config from '../config'
import middleware from '../middleware'
import initializeDb from '../db'
import coffee from '../controller/coffee'

let router = express()

//connect to db

initializeDb (db =>{

    // internal middleware
    router.use(middleware({config,db}))

    //api routes v1 
    router.use('/coffee',coffee({config, db}))
})

export default router

