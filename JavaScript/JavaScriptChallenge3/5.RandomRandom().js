//randomRandom()
//Randomizes a number n in range 0..100. Now randomizes n more numbers in that range, printing the largest of them.

function randomRandom(){
	var rdmNum = Math.floor(Math.random() * (100 - 1)) + 1;
	//console.log("the number ===> " + rdmNum)
	var biggesNum = 0;
	for(i=0; i<rdmNum; i++){
		var nextNum = Math.floor(Math.random() * (rdmNum - 1)) + 1;
		//console.log("New rdm number ===>" + nextNum)
		if (nextNum>biggesNum){
			biggesNum=nextNum
			//console.log("biggest num ===>" + biggesNum)
		}
	}return ("The biggest number is====>" + biggesNum)
};
