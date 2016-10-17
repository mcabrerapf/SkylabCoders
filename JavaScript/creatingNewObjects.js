// COM CREAR OBEJCTES

var student = {
   name: "juanma",
   age: 40
}

// --------------------

function getStudent( myName, myAge ) {
	return {
	   name: myName,
	   age: myAge
	}	
}

var student  = getStudent("juanma", 40);

// --------------------

function Student( myName, myAge ) {
	this.name = myName;
	this.age = myAge;
}

var student  = new Student("juanma", 40);

// --------------------




/* quan copiem objectes copiem tot l'objecte. Si modifiquem una propiertat la modifiquem a totes les copies.

   Cada objecte és únic encara que tinguis les mateixes propietats i valors, nomes son iguals quan un es una copia de l'altre.
   S'ha de tenir cura ja que podem tenir problemes. 