//separateEven
function separateEven(num){
	var numbers = num.toString().split("")
	var onlyEven = ""
	for(i=0; i<numbers.length; i++){
		if((numbers[i]%2)===0 && (numbers[i+1]%2===0)){
			onlyEven += numbers[i] + "-"
		}else{
			onlyEven += numbers[i]
		}
	}
	return onlyEven
}

separateEven(184238491) 