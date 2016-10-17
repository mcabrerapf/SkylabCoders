//randomSum()
//Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. For instance, if the randomized number was 1049, program should print 14

function randomSum(){
	var rdmNum = (Math.floor(Math.random() * (9999 - 1000)) + 1000).toString();
	console.log(rdmNum)
	var rdmNumDigits = rdmNum.split("");
	//console.log(rdmNumDigits)
	var sum=0;
    for (var i=0; i<rdmNumDigits.length; i++) {
        sum = Number(sum) + Number(rdmNumDigits[i]);
        //console.log(rdmNumDigits[i])
        //console.log(sum)
    } 
    return sum;
};

