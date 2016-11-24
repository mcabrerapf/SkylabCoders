
const fs = require('fs')
const request = require('request');


var getLinks = ( fileName ) => {

  return new Promise ( (resolve, reject) => {
      fs.readFile ( fileName, 'utf-8', (err, links) => {
      if (err){
        reject(err)
      } 
      else {
        var linksArray = links.split("\n")
        resolve(linksArray)
      }
        
    });
  })
}


var doRequestUrls = ( links ) => {
  var arrayPromisesRequest = links.map( (link) => {
    return new Promise ( ( resolve, reject ) => {
      request(link, function (error, response, body){
        resolve(body.length + "-" + link)
      })
    })
  })

  return Promise.all( arrayPromisesRequest )
}



var writeArrayLenght = ( lenghtUrl ) => {
  console.log(lenghtUrl);


  return new Promise ( (resolve, reject ) =>{

      fs.writeFile("outfile.txt", lenghtUrl, function(err){
      if(err){
        reject(err)
      } 
      else{
      resolve("the file is saved")
      }
    })
    
  });
}


getLinks("urls.txt")
  .then(doRequestUrls)
  .then(writeArrayLenght)
  .then(console.log)


