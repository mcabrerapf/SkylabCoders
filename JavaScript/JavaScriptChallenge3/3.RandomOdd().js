//randomOdd()
//Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40 nothing should be printed
function randomEven(){
	var baseNum = Math.floor(Math.random() * (100 - 1)) + 1;
	console.log("The num is: "+ baseNum);
	var evenNums = [];
	for(i=1; i<=baseNum; i++){
			if((i%2)!==0 && i>40){
				evenNums.push(i)
			}
		}
	if(evenNums.length > 0){
		return evenNums
	}else{
		return "No hay numeros impares por encima de 40!"
	}
};
