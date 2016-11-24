var fs = require ('fs');
var path = require ('path');
var fileToBeRead = process.argv[2]; // directorio
var ext = '.' + process.argv[3]; // extension


fs.readdir(fileToBeRead, function (err, list){ // El ejercicio pide que se trabaje de forma asincrona por lo que se necesita de una funcion callback.
	
	list.forEach(function (file){ // El objetivo del ejercicio es hacer un filtrado de una lista segun la extension del archivo por lo que se utiliza el forEach para recorrer la data.
		if ( path.extname(file) === ext ){ // Con el metodo path.extname() se puede obtener la extension de los archivos asi que se compara con el segundo parametro para que solo se printeen los que cumplan dicha condicion.
			console.log(file)
		} else if (err) {
			console.log( err )
		}

	})
});


//SOLUCION
var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
	if (err) return console.error(err)
		files.forEach(function (file) {
			if (path.extname(file) === ext) {
				console.log(file)
			}
		})
})