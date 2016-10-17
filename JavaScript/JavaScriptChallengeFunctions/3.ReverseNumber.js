//Reverse Number
function numberReverser(number){
	var word = number.toString();
	var numReverse = word.split("").reverse().join("");
	return Number(numReverse)
}
