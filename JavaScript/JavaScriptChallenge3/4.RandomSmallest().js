//randomSmallers()
//Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40, print all the numbers down to the randomized one (i.e. if the result was 37, you should print: 40, 39, 38, 37)
function randomSmallers(){
	var rdmNum = Math.floor(Math.random() * (100 - 1)) + 1;
	var referenceNum = 40;
	var evenNums = [];
	var countDown = [];
	console.log(rdmNum)
	if(rdmNum > referenceNum){
		for(i=referenceNum; i<=rdmNum; i++){
			if((i%2)!==0){
				evenNums.push(i)
			}
		}return evenNums
	}else if(rdmNum<referenceNum){
		for(i=referenceNum; i>=rdmNum; i--){
			countDown.push(i)
		}return countDown
	}
}
