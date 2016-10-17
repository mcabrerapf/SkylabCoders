//Hexadecimal
function getRGB (bla){
	var hexa = bla;
	var rgb= [];
	rgb.push(parseInt(hexa.subString(0, 2), 16));
	console.log(rgb);
}

getRGB("#00FF0")