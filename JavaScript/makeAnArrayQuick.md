

###Crear array ràpid

```
var counter = 0;
var myArray = Array(10)
myArray.fill(0)

myArray.map( function(elem){
    return counter ++
})


=>  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

```

________

function generateRandom1000() {
  return Math.ceil( (Math.random())*1000 );
}

var myArray = Array(10)
                .fill(0)
                .map( function() {
                  return generateRandom1000();
                })


=>   [115, 854, 721, 395, 547, 993, 224, 104, 398, 257]
