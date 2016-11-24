var sumer = require('./operations/sum.js')
var multer = require('./operations/multiplication.js')
var diver = require('./operations/division.js')
var subter = require('./operations/subtraction.js')
var currentDate = require('moment')

console.log("Today is: " + currentDate().format('LLLL') )
console.log("The sum of 3 & 7 is: " + sumer(3,7))
console.log("The result of 3 & 7 is: " + multer(3,7))
