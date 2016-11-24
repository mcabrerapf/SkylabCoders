var fs = require ('fs');
var path = require ('path');
var http = require('http')
var urlToRead = process.argv[2]; // directorio


var datos = http.get(urlToRead, function callback(err, response){
	if (err) console.log(err);
	var stringResponse = response.setEncoding('utf8');
	console.log(stringResponse)
})

