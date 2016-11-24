 var fs = require('fs');
 var path = process.argv[2];

 var file = fs.readFile(path, 'utf8', function (err, data) {
 	if (err) return err;
 	console.log(data)
 })

 