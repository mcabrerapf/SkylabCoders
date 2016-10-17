//TEXT ADVENTURE 1
confirm("I am ready to play!");
var age = prompt("What's your age?");

if (age < 13){
    console.log("Go ahead but you are not my responsability!");
}else{
    console.log("Go forth brave knight!!!");
}

console.log ("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

userAnswer = prompt("Do you want to race Bieber on stage?").toLowerCase();

if (userAnswer === "yes"){
   console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}else{
    ("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}

feedback = prompt("From 1 to 10 rate my game please");
if (feedback > 8){
    console.log("Thank you! We should race at the next concert!");
}else{
    console.log("I'll keep practicing coding and racing.");
}








//SEARCH TEXT
/*jshint multistr:true */

text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}

/*jshint multistr:true */
var text = "Hey, how are you \ doing? My name is Manuel. Manuel doesn't like \ YOU!!!";
var myName = "Manuel"
var hits = []
for(var i = 0; i < text.length; i++){
    if(text[i] === "M"){
        for(var j = i; j < (myName.length + i); j++) {
            hits.push(text[j])
        }
    }
}
if (hits===0){
    console.log("Your name wan't found!")
}
else{
    console.log(hits)
}









//DRAGON SLAYER
var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}






//TEXT ADVENTURE 2
var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
};













///Rock, Paper, Scissors
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie!"; 
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";} //rock beat scissors
            else {
                return "paper wins" //paper beat rock
            }
        }
    else if(choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins"
        }
            else {return "scissors wins";
            }
    }

};    




//EJERCICIOS DE CODERBYTE
function FirstReverse(str) { 

    var word = " ";
    for (var i = str.length - 1; i >= 0; i--)
    word += str[i];
    return word;
         
}
   
// keep this function call here 
FirstReverse(readline());




function FirstFactorial(num){
	i = num-1	
	for (i; i>=1; i--)
	num =num*i;
	return num
};
   
// keep this function call here 
FirstFactorial(readline());
var penis = prompt("Do you like it?").toUpperCase;


function SimpleAdding(num) { 

  var answer = 0;

  
  for (var i = 1; i <= num; i++) {
    answer = answer + i;
  } 

  return answer;
         
}

SimpleAdding(4);            

function SimpleAdding(num) { 

  return (num*(num+1))/2;
         
}

SimpleAdding(4);


function LetterCapitalize(str) { 
  
  ¡
  var words = str.split(" ");

  
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
  }

  return words.join(" ");
         
}
   
LetterCapitalize("hello world");    








//PRIMER EJERCICIO DEL LIBRO
for (i="#"; i.length=7; i +="#" ){
	console.log(i);
    if(i=="#######")
    break;
};

//SEGUNDO EJERCICIO DEL LIBRO

for (i=1; i<=100; i++)
  if(i%3==0 && i%5==0){
    console.log("FizzBuzz");
  }else if(i%3==0){
    console.log("Fizz")
  }else if(i%5==0){
    console.log("Buzz");
  }else{
    console.log(i);
  };

  //TERCER EJERCICIO HECHÒ POR MI anna

var chessp =(" #")
var chessi =("# ")
var chessp1 = ("")
var chessi1 = ("")
var numerin = prompt("escribe");
var numerin1 = prompt("escribe tambe zorra");

for(j=0; j<numerin1; j++){
  chessp1 +=chessp
  chessi1 +=chessi
};

for(i=0; i<numerin; i++){
 if (i%2==0){
  console.log(chessp1 + "\n");
 }else{ 
    console.log(chessi1 + "\n");
 }
};


//EJERCICIO DE BUSQUEDA

function countBs(str){
  var i = 0
  var count = 0
  for (i; i<str.length; i++)
    if (str.charAt(i)== "B"){
      count+=1
      
    }
  return count
};

function countChar(str, char){
  
  var i = 0
  var count = 0
  for (i; i<str.length; i++)
    if (str.charAt(i)== char){
      count+=1
    }
  return count
  };


console.log(countBs("BBC"));
console.log(countChar("kakkekkkrlak", "ñ"));


//EJERCICIO DE SUMATORIA

function range (start, end){
  var rangeNums=[]
  while (start<=end){
    rangeNums.push(start)
    start++
  }
  return rangeNums
};

function sum (func){
  
  retrun func
}





beatles = ["paul", "ringo", "john", "george"]
for(i=0; i<=beatles.length; i++){
beatles[i]=console.log(beatles[i].charAt(0).toUpperCase()+beatles[i].substr(1));
};


//Ejercicio 1
Us anirem posant exercicis fins que comenci el curs. Al setembre anirem fent trobades setmanals per a fer coses junts i ajudar-vos a pujar el nivell.

Aquí teniu el vostre primer exercici:

- Fer una aplicació que demani noms i que els vagi posant en un array conforme l’usuari els vagi entrant. Ha de parar quan el nom que posem sigui STOP.
- Un cop s’hagi parat, els noms s’han d’endreçar alfabèticament (només per la primera lletra) i mostrar el contingut de l’array endreçat.

No hi ha límit de temps. Es pot fer de diverses maneres. Quan ho hagueu fet, investigueu la funció REDUCE i penseu com es podria fer també amb aquesta funció.



var array= []

var usuario=""

do{
	
	usuario=prompt("favor escriba la palabra que quiere agregar")
	if(usuario.toLowerCase() != "stop")
	{
	array.push(usuario)
    }
}

while(usuario.toLowerCase() != "stop")
console.log("inicial:")
console.log(array)

var ordenado=[]

ordenado[0]=array[0]

for(i=1; i<array.length; i++)
{

 var texto= array[i]
 
 var order=ordenado.length

 for(j=0; j<order; j++)
 {
 	var adentro=ordenado[j]
     
     /*
    console.log(i)
    console.log(j) 
 	console.log(texto)
 	console.log(adentro)
      */

 	if(texto.localeCompare(adentro)<1)
 	{
 		ordenado.splice(j,0,texto)
 		break;
 	}

 	else if(j==ordenado.length-1)
 		ordenado.push(texto)
 }

};

console.log("Ordenado:")
console.log(ordenado)




//Ejercicio 2
El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.

El array de letras es:

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos, elaborar un pequeño script que:

Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado. (Pista: si se quiere pedir directamente al usuario que indique su número y su letra, se puede utilizar la función prompt())
En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.

Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.


//Ejercicio 3
Dada una palabra (el programa debe pedirla), podéis introducir letras y mostrar:
1) Tantos caracteres “_” como letras tenga la palabra.
2) Introducir una letra.
3) Si ésta está en la palabra, sustituir los “_” por la letra introducida.
4) Si la letra no está en la palabra, mostrarla al lado de la palabra como letra no correcta y el número de fallos que podemos cometer aún (sólo se pueden introducir 10 letras incorrectas). 
5) Si se acierta, mostrar la palabra correcta y un mensaje de éxito.
6) Si no se acierta, mostra la palabra y un mensaje de error.


//Ejercicio 4
Queremos reducir un string al máximo. Dado un string, tenéis que quitar las letras apareadas y hacerlo tantas veces como sea posible -de forma recurrente- hasta dar el mínimo string. Si al final no quedan letras deberéis devolver “No hay letras”.
Dado “aaabccddd”, deberíais devolver “abd”. Dado “abba” deberíais devolver “No hay letras” (porqué de “abba” primero es “aa” y luego “”).

palabra = prompt ("Por favor escriba el string:");

for (i = 1; i == palabra.length; i++){
	count = 0
	if (palabra.charAt(count)==palabra.charAt(i)){
		palabra.replace(palabra.charAt(count),"");
		palabra.replace(palabra.charAt(i),"");
	}

	if (palabra == ""){
		alert("No hay letras!!!");
	}
};



//Precurso Dia 1

//Ejercicio A
for (i=0; i<=5; i++){
	console.log(i)
};

//Ejerecicio B
for (i=0; i<=5; i++){
	console.log(i)
};
console.log ("COUNT FINISHED!!!");

//Ejercicio C
numbers = []
	for (i=0; i<=10; i++){
		console.log(i)
	};
console.log("COUNT FINISHED!!!");

//Ejercicio D
numbers = []
	for (i=0; i<=10; i++){
		numbers.push(i)
		console.log(numbers[i])
	};
console.log("COUNT FINISHED!!!");

// Ejercico E
var array = ["Carlos", "Andres", "Piedad"];

for (i=0; i<array.length; i++){
	console.log(array[i])
};


//Ejercicio F
var array = ["Carlos", "Andres", "Piedad"];
var count = 1
for (i=0; i<array.length; i++){
	console.log("Name" + (count) + " " +array[i])
	count++
};

//Ejercicio G
var array = ["Carlos", "Andres", "Piedad"];
var count = 1
for (i=0; i<array.length; i++){
	console.log("Name" + (count) + " " +array[i])
	count++
};

array.push("Andres");
var count1 = 1

for (j=0; j<array.length; j++){
	console.log("Name" + (count1) + " " +array[j])
	count1++
};


//Ejercicio J
for (i=0; i<=50; i+=5){
	console.log(i)
};
console.log("Finished!!!")

//Ejercicio K
/*1597
vuelta 17
*/
for(i=0; i<=18; i++){
	var fibonacci = 1
	var fibonacci2 = 1
	var fibonaccisum = (fibonacci + fibonacci2)
	console.log(fibonaccisum)
	var fibonacci = fibonaccisum - fibonacci
	var fibonacci2 = fibonaccisum - fibonacci2
}


for(i=1; i<=18; i+=i){
	console.log(i)
}

//EX 3 A
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

//Ejercicio D
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











































