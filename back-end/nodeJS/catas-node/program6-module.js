var fs = require('fs');
var path = require('path');

module.exports = function filterThings(folder, extension, callback) {
	fs.readdir(folder, function(err, files) {
		if(err) return callback(err);

		var finalArray = [];
		files.forEach(function(file) {
			if(path.extname(file) === "." + extension) {
				finalArray.push(file);
			}       
		});     
		return callback(null, finalArray);
	});
}


//SOLUCION
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
	fs.readdir(dir, function (err, list) {
		if (err) {
			return callback(err)
		}

		list = list.filter(function (file) {
			return path.extname(file) === '.' + filterStr
		})

		callback(null, list)
	})
}