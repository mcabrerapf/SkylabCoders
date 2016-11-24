const fs = require('fs')
const request = require('request');


const getUrlContent = function( url ) {

	return new Promise( (resolve, reject) => {

		request(url, function (error, response, body) {
			resolve(body);
		})

	})

}

getUrlContent('http://www.facebook.com')
	.then( function(data) {
		console.log( data.length )
	})