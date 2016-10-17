///STRINGS
///a
var name = "Manuel"

///b
console.log(name)

///c
var age = 26;
console.log(name + " " + age)

///d

var showing = function(name1, age1){
	console.log(name1+ " " + age1)
};
showing(name, age);

///e
var myData = function(as, asi){
	console.log("My name is " + as + " and I'm " + asi + ".")
};

myData(name, age);

///f
var city = "Barcelona";
var myData1 = function(as, asi, asii){
	console.log("My name is " + as + ", I live in " + asii + " and I'm " + asi + ".")
};

myData1(name, age, city);

///g
var datos = ["Manuel", "Barcelona", 26]
var myData1 = function(as, asi, asii){
	console.log("My name is " + as + ", I live in " + asii + " and I'm " + asi + ".")
};

myData1(datos[0], datos[2], datos[1]);

///h
var myData1 = function(as, asi, asii){
	if (isNaN(asi)){
		console.log("ERROR")
	}else{
	console.log("My name is " + as + ", I live in " + asii + " and I'm " + asi + ".")
}
};

myData1(datos[0], "helloe", datos[1]);

///i

///j
var adder = function(data){
	datos.push(data)
	console.log(datos)
}
adder("hello");

///k
var adder1 = function(data){
	datos.push(data)
	console.log(datos.join(" & "))
}
adder1("hello");


///LOOPS

///a
for(i=0; i<6; i++){
	console.log(i)
};


///b
for(i=0; i<6; i++){
	console.log(i)
};
console.log("Count Finished!!!");

///c
for(i=0; i<11; i++){
	console.log(i)
};
console.log("Count Finished!!!");

///d
var counter = []
for(i=0; i<11; i++){
	counter.push(i)
	console.log(counter[i])
};
console.log(counter)
console.log("Count Finished!!!");

///e
var friends = ["Manuel","Andres","Carlos","Luis"]
for (i=0; i<friends.length; i++){
	console.log(friends[i])
};

///f
var friends = ["Manuel","Andres","Carlos","Luis"]
for (i=0; i<friends.length; i++){
	console.log("No. " + (i+1) + " " + friends[i])
};

///g
var friends = ["Manuel","Andres","Carlos","Luis"]
for (i=0; i<friends.length; i++){
	console.log("No. " + (i+1) + " " + friends[i])
};

friends.push("Jesus");
console.log(friends);

///h
for (i=0; i<=50; i+=5){
	console.log(i)
};
console.log("Finished!!!")

///i
for (i=0; i<=100; i+=10){
	console.log(i)
};
console.log("Finished!!!")

///Conditionals

/// A
var name = "Manuellll"
if (name.length>8){
	console.log("Alerta!!!")
};
console.log(name)

//Ejercicio B y C
var name = "Manuel"
var lname = "Cabrera"
if (name.length>lname.length){
	console.log("Tu nombre es mas largo")
}else if(name.length<lname.length) {
	console.log("Tu apellido es mas largo")
}else{
	console.log("Tu nombre y apellido son iguales")
};
console.log(name)

//Ejercicio D y E
function multi(n1, n1){
	var n1 = prompt("Primer numero")
	var n2 = prompt("Segundo numero")
	var n3 = n1*n2
	console.log(n3);
	if (n3 < 10){
		console.log("Tu numero es menor a 10")
	}else if (n3 > 10){
		console.log("Tu numero es mayor a 10")
	}else if(n3==10){
		console.log("Tu numero es igual a 10")
	}else if(isNaN(n3)==true){
		console.log("No haz dado numeros validos")
	}
};
multi()



