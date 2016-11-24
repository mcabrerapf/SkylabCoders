const express = require('express')
const bodyparser = require('body-parser')

const MongoClient = require('mongodb').MongoClient;
const app = express()
const PORT = 3000;

const urlDB = 'mongodb://localhost:27017/test'

app.set('view engine', 'pug')
app.use( express.static('public') )
app.use( bodyparser.urlencoded({ extended: false }) )

MongoClient.connect( urlDB )
.then( db => {

	console.log("connected to DB...")

	app.get('/', (req,res) => {

		const title = "TODO Tasks"

		db.collection('todo')
		.find( { done: false })
		.toArray()
		.then( pending => {
			res.render('index', { title, pending } )
		})

	})

			//const pending = tasks.filter( task => task.done === false );

		})
.catch( err => console.log(err) )


// app.get('/completed', (req,res) => {
// 	const title = "COMPLETED Tasks"
// 	const completed = tasks.filter( task => task.done === true );
// 	res.render('completed', { title, completed } )
// })

// app.get('/tasks', (req,res) => {
// 	res.json(tasks)
// })

// // curl --request POST 'http://localhost:3000/task' --data 'desc=My new task'
// app.post('/task', (req,res) => {
// 	var newTask = req.body;
// 	newTask.done = false;
// 	newTask.id = counter++;
// 	tasks.push(newTask);
// 	res.redirect('/');
// })

// // curl --request DELETE 'http://localhost:3000/task/2'
// app.delete('/task/:id', (req,res) => {
// 	const id = +req.params.id;
// 	tasks = tasks.filter( task => task.id != id );
// 	console.log(tasks)
// 	res.sendStatus(200)
// })

// // curl -X PUT http://localhost:3000/task/2 --data done=true
// app.put('/task/:id', (req,res) => {
// 	const id = +req.params.id;

// 	const isDone = (req.body.done === "true") ? true : false;
// 	console.log (isDone)
// 	console.log (id)

// 	tasks = tasks.map( task => {
// 		if ( task.id === id ) {
// 			task.done = isDone
// 		}
// 		return task;
// 	});

// 	res.sendStatus(200)
// })


app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )