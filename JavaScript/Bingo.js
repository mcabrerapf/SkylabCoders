//BINGO
var row_1= [2, 6, 8, 1, 4]
var row_2= [11, 15, 3, 5, 7]
var row_3= [9, 12, 10, 17, 18]
console.log("TU CARTA ES:")
console.log(row_1.join(" | "))
console.log(row_2.join(" | "))
console.log(row_3.join(" | "))

var bolas=[]


for (i=0; i<=49; i++){
	var numero_rndm = Math.floor((Math.random() * 20) + 1);
	for (k=0; k<=bolas.length; k++){
		if (bolas[i]==numero_rndm){
			console.log("Numero repetido!!!")
		}
	}
	console.log("La bola da: " + numero_rndm)
	bolas.push(numero_rndm) 
		for (j=0; j<=4; j++){
			if (row_1[j]==numero_rndm){
				row_1[j]="X";
			}
			else if (row_2[j]==numero_rndm){
				row_2[j]="X";
			}
			else if (row_3[j]==numero_rndm){
				row_3[j]="X";
			} 
		};
	console.log(row_1.join(" | "))
	console.log(row_2.join(" | "))
	console.log(row_3.join(" | "))
	if (row_1[0]=="X" && row_1[1]=="X" && row_1[2]=="X" && row_1[3]=="X" && row_1[4]=="X" && row_2[0]=="X" && row_2[1]=="X" && row_2[2]=="X" && row_2[3]=="X" && row_2[4]=="X" && row_3[0]=="X" && row_3[1]=="X" && row_3[2]=="X" && row_3[3]=="X" && row_3[4]=="X" ){
		console.log("LINEA 1, 2 y 3 COMPLETAS!!! HAZ GANADO!!!!")
		break;
	}else if (row_1[0]=="X" && row_1[1]=="X" && row_1[2]=="X" && row_1[3]=="X" && row_1[4]=="X" && row_2[0]=="X" && row_2[1]=="X" && row_2[2]=="X" && row_2[3]=="X" && row_2[4]=="X"){
		console.log("LINEA 1 y 2 COMPLETAS!!!")
	}else if (row_1[0]=="X" && row_1[1]=="X" && row_1[2]=="X" && row_1[3]=="X" && row_1[4]=="X" && row_3[0]=="X" && row_3[1]=="X" && row_3[2]=="X" && row_3[3]=="X" && row_3[4]=="X"){
		console.log("LINEA 1 y 3 COMPLETAS!!!")
	}else if (row_2[0]=="X" && row_2[1]=="X" && row_2[2]=="X" && row_2[3]=="X" && row_2[4]=="X" && row_3[0]=="X" && row_3[1]=="X" && row_3[2]=="X" && row_3[3]=="X" && row_3[4]=="X"){
		console.log("LINEA 2 y 3 COMPLETAS!!!")
	}else if (row_1[0]=="X" && row_1[1]=="X" && row_1[2]=="X" && row_1[3]=="X" && row_1[4]=="X"){
		console.log("LINEA 1 COMPLETA!!!")
	}else if (row_2[0]=="X" && row_2[1]=="X" && row_2[2]=="X" && row_2[3]=="X" && row_2[4]=="X"){
		console.log("LINEA 2 COMPLETA!!!")
	}else if (row_3[0]=="X" && row_3[1]=="X" && row_3[2]=="X" && row_3[3]=="X" && row_3[4]=="X"){
		console.log("LINEA 3 COMPLETA!!!")
	}
	console.log("Numeros que han salido: " + bolas.join(", "))
};




//PAPEL, TIJERA, PIEDRA
