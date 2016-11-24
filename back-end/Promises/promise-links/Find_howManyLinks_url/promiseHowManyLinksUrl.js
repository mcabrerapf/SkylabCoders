
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
        var howManyLinks = body.match(/href/g).length
        resolve(howManyLinks)
        console.log(howManyLinks)
      })
    })
  })

  return Promise.all( arrayPromisesRequest )
}



var writeArrayLenght = ( lenghtUrl ) => {
  console.log(lenghtUrl)
  var urlMoreLinks = Math.max.apply(Math, lenghtUrl)
  console.log(urlMoreLinks)

  return new Promise ( (resolve, reject ) =>{

      fs.writeFile("outfile.txt", urlMoreLinks, function(err){
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


