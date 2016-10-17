//Calculation
function calculation (){
	var mul = 23;
	var count = 1;
	i = 0
	var numeros = []
	while (i<500){
		i= mul * count
		if (i>500){
			break;
		}else{
		count++
		numeros.push(i)
	}
	}console.log(numeros)
}
calculation()

var sum = [1, 2, 3].reduce(add, 0);

function add(a, b) {
    return a + b;
}