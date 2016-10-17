//String calculator
function adder(numString){
	var numbs = numString.split(",")
	console.log(numbs)
	var sum=0;
    for (var i=0; i<numbs.length; i++) {
        sum = Number(sum) + Number(numbs[i]);
    } 
    return sum;
}
