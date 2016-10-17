//randomEven()
//Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.

function randomEven(){
	var baseNum = Math.floor(Math.random() * (100 - 1)) + 1;
	console.log("The num is: "+ baseNum);
	var evenNums = [];
	for(i=1; i<=baseNum; i++){
			if((i%2)==0){
				evenNums.push(i)
			}
		}
	return evenNums
};