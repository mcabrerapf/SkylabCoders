const express = require('express')
const bodyparser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;


// const handlers = require("./public/js/handlers.js");
const getMusicians = require("./public/js/handlers/getMusicians.js").getMusicians;
const insertDocument = require("./public/js/handlers/insertDocument.js").insertDocument;
const getUserById = require("./public/js/handlers/getUserById.js").getUserById;

const prepareParams = require('./middleware/prepareParams')
//pasport
// const passport = require("./public/js/auth.js")
// //
const PORT = 3000;
const app = express()
const url = 'mongodb://localhost:27017/pFinal'

app.use( express.static('public') )
app.set('view engine', 'pug')
app.use( bodyparser.urlencoded({ extended: false }) )
// //passport
// app.use(passport.initialize());
// app.use(passport.session());
// //
app.get('/', (req, res) => {
	res.render("index.pug")
})
app.get('/sign-up', (req, res) => {
	res.render("sign-up.pug")
})
app.get('/sign-up-success', (req, res) => {
	res.render("sign-up-success.pug")
})
app.get('/home', (req, res) => {
	res.render("index.pug")
})
app.get('/user', (req, res) => {
	res.render("user.pug")
})
// //passport
// app.get('/login', (req, res) => {
// 	res.render("login.pug")
// })
// app.post('/login', passport.authenticate('local', { 
// 	successRedirect: '/user',
// 	failureRedirect: '/login' }));
// //
app.get('/search', (req, res) => {
	res.render("search.pug")
})
app.get('/results', (req, res) => {
	res.render("results.pug")
})

MongoClient.connect(url, (err, db) => {
	if (err) throw err;
	console.log("connected to DB...")
	app.use( prepareParams )
	app.post('/search', getMusicians.bind(null, db)   /* functions.getMusicians(null, db) */ )
	app.post('/sign-up', insertDocument.bind(null,db))
	app.post('/results', getUserById.bind(null,db))
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )

