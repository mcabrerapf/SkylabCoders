//Is prime
function isPrime(num) {
    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return "No es primo :(";
        }
    }
    if(num>1){
    	return num + " es PRIMO!!!!!"
    }else{
    	return "Tu numero no es primo :("
    }
};