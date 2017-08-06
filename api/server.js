var express = require ('express')
var app = express()
var bodyParser =require ('body-parser')
var mongoose =require ('mongoose')

//Config app for bodyParser
//lets get data from the body of POST

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Set up port for server to listen on

var port=process.env.PORT || 3000

//Connect to db

mongoose.connect('mongodb://localhost:27017/codealong')

//API router

var router =express.Router()

//Router will all be prefix with /api

app.use('/api',router)

//Test router

router.get('/', function(req,res) {
    res.json({message:'Welcome to Ali Kahwaji API'})
})

//Fire up server 
app.listen(port)

//Console message 

console.log('Server listing on port' + port)

