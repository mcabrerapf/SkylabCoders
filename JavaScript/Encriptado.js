///EJERCICIO M
var clave=prompt("Introduzca una clave de 4 caracteres");
if (clave.length==4){
	clave_cc=[];
	clave_cc.push(clave.charAt(3));
	clave_cc.push(clave.charAt(0));
	clave_cc.push(clave.charAt(1));
	clave_cc.push(clave.charAt(2));
	console.log(clave_cc.join(""))

}else if (clave.length>4){
	confirm("Su clave es muy larga")
}else if (clave.length<4){
	confirm("Su clave es muy corta")
};

///EJERCICIO N
var pal = prompt("Escriba su palabra")
var pal_scramble=[];

for(i=0; i<=pal.length/2-1; i++){
	pal_scramble.push(pal.charAt(i));
	pal_scramble.push(pal.charAt(pal.length/2+i));
}
pal_scramble.join("")

///slkayb syaklb
///UNSCRAMBLE
var pal = prompt("Escriba su palabra")
var pal_scramble=[];

for(i=0; i<=pal.length; i+=2){
	pal_scramble.push(pal.charAt(i));
}
pal_scramble.join("")

for(j=1; j<=pal.length; j+=2){
	pal_scramble.push(pal.charAt(j));
}
pal_scramble.join("")


// skylabcoders sckoydlearbs syacdrklboes


//slkayb skla
function scramble_n_descramble(palabra){
	var pal = palabra;
	var pal_scramble=[];

	for(i=0; i<=pal.length/2-1; i++){
		pal_scramble.push(pal.charAt(i));
		pal_scramble.push(pal.charAt(pal.length/2+i));
	}
	var pal1 = pal_scramble.join("");
	console.log(pal1)

	var pal_descramble=[];
	

	for(i=0; i<=pal1.length; i+=2){
		pal_descramble.push(pal1.charAt(i));
	}
	pal_descramble.join("")

	for(j=1; j<=pal.length; j+=2){
		pal_descramble.push(pal1.charAt(j));
	}
	return(pal_descramble.join(""));

};

scramble_n_descramble("skylab");