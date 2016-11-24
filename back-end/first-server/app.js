const express = require("express");
const PORT = process.argv[2];
const ENV = process.env.ENVIRONMENT
let app = express();


app.get('/about', (request, response)=>{
	if(ENV === "developer"){
		console.log("request recieved!")
		response.send("Hello there developer! You are in about")

	}else{
		console.log("request recieved!")
		response.send("Hello there user! You are in about")
	}
})

app.get('/home', (request, response)=>{
	if(ENV === "developer"){
		console.log("request recieved!")
		response.send("Hello there developer! You are in home")

	}else{
		console.log("request recieved!")
		response.send("Hello there user! You are in home")
	}
})

app.get('/contact', (request, response)=>{
	if(ENV === "developer"){
		console.log("request recieved!")
		response.send("Hello there developer! You are in contact")

	}else{
		console.log("request recieved!")
		response.send("Hello there user! You are in contact")
	}
})


app.listen(PORT,()=>{
	console.log(`Listening on port ${PORT}...`)
})

//----------------------------------------------------------------------------------------------------------------

// const express = require ('express');
// const PORT = process.argv[2];
// let app = express();
// const ENV = process.env.ENV;

// app.get('/home', (request, response) => {
//     if (ENV==="DEVELOPMENT") {
//     console.log("request received")
//     response.send("You are Home and your env is dev.")    
//     }else{
//         console.log("request received")
//         response.send(`You are Home and your env is produc.`)
//     }

// })
// app.get('/about', (request, response) => {
//     console.log("request received")
//     response.send("You are about")

// })
// app.get('/contact', (request, response) => {
//     console.log("request received")
//     response.send("You are Contact")

// })

// app.listen(PORT,() => {
//     console.log(`listening on ${PORT}`)
// })



