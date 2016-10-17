

## FUNCIONS CONSTRUCTORES I PROTOTYPE

```
function Person(gender) {
    this.gender = gender;
    console.log (this.gender + ' instantiated');
  }


   	var person1 = new Person('Male');
  	var person2 = new Person('Female');

  >>> person1.gender === 'Male'
  true
  >>> person2.gender === 'Female'
  true

  >>> Person.prototype.type = 'Human being';  // Type és comú.

  >>> person1.type === 'Human being'
  true
  >>> person2.type === 'Human being'
  true

  person1.type = 'Super Hero';  // canviem el valor per person1.

  >>> person1.type === 'Super Hero'  // ha canviat el valor no+ per aquest.
  true
  >>> person2.type === 'Human being'
  true
```

  Si cridem la funció sense el _new_, el `this` no sap on trobar el resultat i el busca a window.
  Si ho fem amb _new_ ho busca dins la variable on hem cridat la funció. O sigui, que per var person1 buscarà aquí dins.


  Això funciona quan fem servir funcions constuctores.

  La propietet _prototype_ només serveix per les funcions. 



Exemple:

  ```
  function studen ( myName, myAge){
    this.name = myName;
    this.age = myAge;
  }

  Student.prototype..sayHi = function(){
    return "hi " + this.name + this.age + " years old";
  }

  var studend1 = new Student ("juan", 20);
  var studend2 = new Student ("marta", 30);
```




    - Ara, les 2 variables tenen nom i edat diferent xo el sayHi es comú!

    - ELs objectes tenen accés a les propietats que em definit al prototype sempre hi quan les formem amb una funció constuctora.