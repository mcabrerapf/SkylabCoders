function fizzBuzz(){
	var counter = 1;
	var myArray = Array(100)
	myArray.fill(1)

	fizzArray = myArray.map(function(elem){
		return counter++
	})
	fizzArray.forEach(function (element, index, array) {
  	if (array[index]%3 === 0 && array[index]%5 === 0) array[index] = "FizzBuzz"
  	if (array[index]%3 === 0) array[index] = "Fizz"
	if (array[index]%5 === 0) array[index] = "Buzz"
})
	return fizzArray
};






