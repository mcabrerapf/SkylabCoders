//EJERCICIO 1
function difer (a, b){
    if (a<b){
        for (a; a<=b; a++)
            console.log(a);
    }else if (a>b){
        console.log("-1")
    }
}
difer(2,5)


//EJERCICIO 2
function tabla(){
    var tablas = []
    for (a=1; a<=10; a++){

        for (i=1; i<=10; i++){
            tablas.push(i*a + "\t");
        }
    tablas.push("\n")
    }
console.log(tablas.join(""));    

}
tabla();

//EJERCICIO 3
function multi(x){
	for (i=1; i<=10; i++){
		console.log(i*x)
	}
}
multi()

//EJERCICIO 4
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

//EJERCICIO 5
function comparator(x,y){
	if (x<y){
		console.log("Tu segundo numero es mayor!")
	}else if (x>y){
		console.log("Tu primer numero es mayor!")
	}else{
		console.log("Tus numeros son iguales!!!")
	}
};

comparator()

//EJERCICIO 6
function maxOfthree(a,b,c){
	if(a>b && a>c){
		console.log("El primer numero es mas grande")
	}else if(b>a && b>c){
		console.log("El segundo numero es mas grande")
	}else if(c>a && c>b){
		console.log("El tercer numero es mas grande")
	}else{
		console.log("Fuck You!")
	}
};

//EJERCICIO 7
function vowel(a){
	var vocal= a
	if(vocal.charAt(0)=="a" || vocal.charAt(0)=="e" || vocal.charAt(0)=="i" || vocal.charAt(0)=="o" || vocal.charAt(0)=="u"){
		console.log("Es vocal")
		}else{
			console.log("false")
	}
};
vowel ("b")

//EJERCICIO 8
function getRGB (bla){
	var hexa = bla;
	var rgb= [];
	rgb.push(parseInt(hexa.subString(0, 2), 16));
	console.log(rgb);
}

getRGB("#00FF0")


//EJERICIO calc
function calculator (cal,a,b){
	if(cal=="sum"){
		return a + b
	}else if(cal=="mul"){
		return a*b
	}else if (cal=="div"){
		return a/b
	}else if(cal=="res"){
		return a-b
	}
}

calculator("sum",2,3)

//EJERCICIO calc2


//EJERCICOO despues del calc
function getFullName(name,last){
	console.log("Your full name is: " + name + last)
}