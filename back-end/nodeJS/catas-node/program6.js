var finish = require('./program6-module.js');

finish(process.argv[2], process.argv[3], function(err, data) {
	if(err) return callback(err);

	data.forEach(function(file) {
		console.log(file);      
	}); 
});



//SOLUCION

var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
	if (err) {
		return console.error('There was an error:', err)
	}

	list.forEach(function (file) {
		console.log(file)
	})
})