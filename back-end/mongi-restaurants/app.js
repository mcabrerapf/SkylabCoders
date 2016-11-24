// const express = require("express")
// const mongoClient = require("mongodb").MongoClient
// const url = "mongodb://localhost:27017/tester";
// const PORT = 3000;
// const app = express();


// mongoClient.connect(url, (err, db) => {
// 	if (err) throw err;
// 	console.log("connect to DB....")
// 	app.get("/restaurants", (req, res) => {
// 		// const limit = +req.query.size || 20;
// 		// const page = +req.query.page || 1;
// 		// const skip = (limit*(page-1))+1;
// 		db.collection("restaurants")
// 		.find( {})
//         .toArray()
//         .then( data => res.json(data) )
//         .then(console.log)
//         })
// });


// app.listen(PORT, () => console.log("listening on port 3000..."))

const express = require('express')
const MongoClient = require('mongodb').MongoClient

const prepareParams = require('./middleware/prepareParams')

const getRestaurants = require('./handlers/getRestaurants')
const getRestaurantsByBorough = require('./handlers/getRestaurantsByBorough')
// const getRestaurantsByGenre = require('./handlers/getRestaurantsByGenre')

const url = "mongodb://localhost:27017/tester"
const PORT = 3000;

const app = express();


MongoClient.connect(url, (err, db) => {

	if (err) throw err;
	console.log("connected to DB...")

	app.use( prepareParams )

	app.get('/restaurants', getRestaurants.bind(null, db) )
	app.get('/restaurants/boroughs/:borough', getRestaurantsByBorough.bind(null, db))
	// app.get('/movies/genres/:genre', getRestaurantsByGenre.bind(null, db) )

})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )