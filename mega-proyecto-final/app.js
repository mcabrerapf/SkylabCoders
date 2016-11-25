const express = require('express')
const bodyparser = require('body-parser')
//const MongoClient = require('mongodb').MongoClient;
const db = require('./db');
const routes = require('./routes')

const getMusicians = require("./public/js/handlers/getMusicians.js").getMusicians;
const insertDocument = require("./public/js/handlers/insertDocument.js").insertDocument;
const getUserById = require("./public/js/handlers/getUserById.js").getUserById;

const prepareParams = require('./middleware/prepareParams')

// const passport = require("./public/js/auth.js")
const PORT = 3000;
const app = express()

app.use( express.static('public') )
app.set('view engine', 'pug')
app.use( bodyparser.urlencoded({ extended: false }) )
app.use('/', routes)
// //passport
// app.use(passport.initialize());
// app.use(passport.session());
// //

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )

