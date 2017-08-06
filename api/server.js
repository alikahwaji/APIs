var express = require ('express')
var app = express()
var bodyParser =require ('body-parser')
var mongoose =require ('mongoose')
var Movie = require ('./app/models/movie')

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

//Middleware can be very useful for doing validations. We can log
//things from here or stop the request from continuing in the event that the request is not safe.
//middleware to use for all requests.

router.use(function(req,res, next){
    console.log('FYI.....There is some process currently')
    next()
})

//Test router

router.get('/', function(req,res) {
    res.json({message:'Welcome to Ali Kahwaji API'})
})

router.route('/movies')

   .post(function(req,res){
       var movie = new Movie() // new instance of a movie
       movie.title = req.body.title
       movie.genre = req.body.genre
       movie.year = req.body.year

       movie.save(function(err){
           if (err) {
               res.send(err)
           } 
            res.json({message:'Movie was successfuly uploaded'})
       })
   })

   .get(function(req,res){
       Movie.find(function(err,movies){
           if (err) {
               res.send(err)
           }
            res.json(movies)
       })
   })

   router.route('/movie/:movie_id')
   .get(function(req,res){
       Movie.findById(req.params.movie_id, function(err,movie){
           if(err) {
               res.send(err)
           }
            res.json(movie)
       })
   })

   router.route('/movie/title/:title')
   .get(function(req,res){
       Movie.find({title:req.params.title}, function(err,movie){
           if(err){
               res.send(err)
           }
            res.json(movie)
       })
   })

   router.route('/movie/year/:year')
   .get(function(req,res){
       Movie.find({make: req.params.year}, function(err, movie){
           if(err){
               res.send(err)
           }
            res.json(movie)
       })
   })

//Fire up server 
app.listen(port)

//Console message 

console.log('Server listing on port' + port)

