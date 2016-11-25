const express = require('express')
const router = express.Router()
const userSchema = require('../models/userSchema')

router.get('/', (req, res) => {
	res.render("index.pug")
})
router.get('/sign-up', (req, res) => {
	res.render("sign-up.pug")
})
router.get('/sign-up-success', (req, res) => {
	res.render("sign-up-success.pug")
})
router.get('/home', (req, res) => {
	res.render("index.pug")
})

// //passport
// router.get('/login', (req, res) => {
// 	res.render("login.pug")
// })
// router.post('/login', passport.authenticate('local', { 
// 	successRedirect: '/user',
// 	failureRedirect: '/login' }));
// //
router.get('/user/:id', (req, res) =>{
	var id = req.params.id
	userSchema.findById(id, (err, user) => {
		console.log(user)
		res.render('user.pug', {user})	
	})
	
})
router.get('/search', (req, res) => {
	res.render("search.pug")
})
router.get('/results', (req, res) => {
	res.render("results.pug")
})

router.post('/sign-up', (req,res) => {
	var user = req.body
	// instance of model
	var newUser = new userSchema(user);

	// saving data to the DB
	newUser.save( (err, newUser) => {
		if (err) return console.error(err);
		console.log("saved succesfully");
	});
	res.redirect("/sign-up-success")

})
router.post('/search', (req,res) => {
	console.log(req.body)
	var filter = {}
	var { instrument, local, teacherAvailable, band, genre } = req.body;
	debugger;
	if (band) {
		console.log("we are in band")
		bands = band.split(",");
		filter.band = { $in: bands }
	}
	if (genre) {
		genre = genre.split(",");
		filter.genre = { $in: genre }
	}
	if (instrument) {
		console.log("we are in instruments")
		instrument = instrument.split(",");
		filter.instrument = { $in: instrument }
	}
	if(local){
		filter.local = local;
	}
	if(teacherAvailable){
		filter.teacherAvailable = teacherAvailable;
	}
	
	userSchema.find( filter, function (err, users) {
		if (err) return handleError(err);
		console.log(users)
		res.render("results", {users})
	})

})

module.exports = router;