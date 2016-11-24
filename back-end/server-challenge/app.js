const express = require("express");
const fs = require("fs");
const PORT = 3000;

var datosJSON;

const app = express();



app.use(express.static("public"));


app.get('/data', function(req, res){
	let filename = "./data/students.json";
	fs.readFile( filename, function(error, data){
		if(error) return res.sendStatus(500)
			try {
				datosJSON = JSON.parse(data);
			}
			catch(e) {
				res.sendStatus(500);
			}
			res.json(datosJSON)
		})
});






app.listen(PORT),()=>{
	console.log("listening")
};


// console.log(`Listening on port ${PORT}...`)