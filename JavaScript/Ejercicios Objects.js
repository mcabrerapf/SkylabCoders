///	a)
var student = {
	name: "Manuel",
	class: "VI",
	id:34
};

var printing = function(obj){
	for (var prop in obj){
		console.log(prop);
	}
};

printing(student)

/// b)
var student = {
	name: "Manuel",
	class: "VI",
	id:34
};

var printStudent = function(student){
	console.log(student)
};

printStudent(student)

/// c)
var student = {
	name: "Manuel",
	class: "VI"
};

var changing = function(){
	student.class = "XI"
	console.log(student)
}

changing()


/// d)
var student = {
	name: "Manuel",
	class: "XI",
	id:34,
};

var deleting = function(){
	delete student.id;
	console.log(student);
};

deleting()
/// e)
var student = {
	name: "Manuel",
	class: "VI",
	id:34
};

var numerico = function(){
	console.log(Object.keys(student).length)
}

numerico()

/// f)
var student = {
	name: "Manuel",
	class: "XI",
};

var addCity = function(){
	student.city = "Barcelona"
	console.log(student)
};

addCity()

/// g)
var student = {
	name: "Manuel",
	class: "XI",
	id:34
};

var changeName = function(){
	student.fullName = student.name;
	delete student.name;
	console.log(student)
}

changeName()

/// h)
var student = {
	fullName: "Manuel",
	class: "XI",
	id:34
};

var presentation = function(){
	console.log ("Hello, my name is " + student.fullName + " my Class is: " + student.class + " and my ID is: " + student.id)
}

presentation()