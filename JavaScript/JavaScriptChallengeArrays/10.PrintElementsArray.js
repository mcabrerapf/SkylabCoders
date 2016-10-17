//Print elemnts array
var arrayay = [[2,3,4,5,],[5,6,7,8],["nah",1,2,3,4]]

function printer (arr, depth){
	for(i= 0; i<arr.length; i++){
		console.log( "Row: " + i )
		for(j=0; j<arr[i].length; j++){
			console.log( arr[i][j] )
		}
	}
}

printer(arrayay)
