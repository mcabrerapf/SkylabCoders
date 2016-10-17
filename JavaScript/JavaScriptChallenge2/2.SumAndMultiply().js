//sum() & multiply()
function sum (array){
	var sum=0;
    for (var i=0; i<array.length; i++) {
        sum = sum + array[i];
    } 
    return sum;

};


function multiply (array) {
    var mult=1;
        for (var i=0; i<array.length; i++) {
            mult = mult * array[i];
    } 
     return mult;
};

