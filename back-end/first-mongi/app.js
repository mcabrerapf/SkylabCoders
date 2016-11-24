var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017/monginsky';
// Use connect method to connect to the Server

MongoClient.connect(url, (err, db) => {

  if (err) throw("There were problems connecting to the DB server...");
  console.log("hello")
  db.collection('monginsky')
      //.find()
      //.count()
      //console.log(monginsky.find().count())
      //.toArray( (err, docs) => console.log (docs) );
      //.forEach( (doc) => console.log(doc));

  db.close();


  //mongoimport --db monginsky --collection monginsky --drop --file ~/downloads/primer-dataset.json


});