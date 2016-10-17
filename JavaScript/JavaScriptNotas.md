
##*Notas* **de** ***JavaScript***
Cuando se igualan dos objetos lo que suecede es que se realiza una copia, por lo que lo que se modifica en uno sera modificado en el otro.  
Esto **NO** sucede con strings, numbers etc.. solo con objetos (arrays, objetos, functions)

    var myObject = {a: "123", b: "456"}
    var myAnotherObject = myObject 
    
    function nullify (o){
        for (var prop in o){
            delete o[prop]
        }
    }
---

Todas las funciones tienen un objeto que se llama `object.prototype`, por medio de la cual se le puede asignar nuevas funciones internas a los objetos.

Esta funcion crea una instancia nueva de un objeto con propiedad gender que se asignara a una variable.

    function Person(gender){
        this.gender = gender;
        console.log(this.gender  + ' created');
    }
    var person1 = new Person("male")
    Person.prototype.sayHi = function(){
        return "Hi " + this.gender + ". How are YOU?"
    }
    Person.prototype.food = "Pizza Pie"
---

###Funcion Recursiva (**jodido**)
La funcion recursiva lo que hace es ir desde  el paramatero inicial hacia el parametro donde acaba y despues volevera pero con valores adquiridos.  

###Ej.1
```
 function factorial(n) {

    if (n===1) return 1;
    var factNminus1 = factorial(n-1);
    var tempResult = n*factNminus1;

    console.log("---------------------------")
    console.log("n => " + n)
    console.log("n-1 => " + (n-1) )
    console.log("factorial(" + (n-1) + ") => " + factNminus1)
    console.log("n*factorial(" + (n-1) + ") => " + tempResult)

    return tempResult

}
```
###Ej.2

```
function fibonacci (n) {
  if (n===0) return 0;
  if (n===1) return 1;
  var nMinus1 = n-1;
  var nMinus2 = n-2;
  var fibMinus1 = fibonacci(nMinus1);
  var fibMinus2 = fibonacci(nMinus2);
  var tempResult = fibMinus1 + fibMinus2;
  console.log ( "--------------------------------")
  console.log ( "n => " + n)
  console.log ( "fibonacci(" + nMinus1 + ") => " + fibMinus1)
  console.log ( "fibonacci(" + nMinus2 + ") => " + fibMinus2)
  console.log ( "fibonacci(" + nMinus1 + ") + fibonacci("+ nMinus2 +") => " + tempResult)
  return tempResult
}
```

Esta funcion redoendea un numero a los decimales especificados y los convierte a string.


    toFixed(cantidad de decimales)

    