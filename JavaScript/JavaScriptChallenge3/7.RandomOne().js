//randomOne()
//Randomizes a number (range 1000..9999) and calculate the sum of its digits repeatedly until you reach one digit only. For instance, if the randomized number was 1049, program should print 5

function randomOne(){
	var rdmNum = (Math.floor(Math.random() * (9999 - 1000)) + 1000).toString();
	console.log(rdmNum)
	var rdmNumDigits = rdmNum.split("");
	console.log(rdmNumDigits)
	var sum=0;
    for (var i=0; i<rdmNumDigits.length; i++) {
        sum = Number(sum) + Number(rdmNumDigits[i]);
        console.log(rdmNumDigits[i])
        console.log(sum)
    } 
    sum = sum.toString()
    rdmNumDigits = sum.split("");
    console.log(rdmNumDigits)
    sum2=0;
    if (rdmNumDigits.length>1){
    	for (var i=0; i<rdmNumDigits.length; i++) {
        sum2 = Number(sum2) + Number(rdmNumDigits[i]);
        console.log(rdmNumDigits[i])
        console.log(sum2)
        console.log("suma final " + sum2)
    }
}return sum2
}	
