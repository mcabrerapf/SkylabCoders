//Translate
var englishToSwedish = {
	merry:"god",
	christmas: "jul",
	and: "och",
	happy: "gott",
	new: "nytt",
	year:"år"
}

function translator(string){
	var eng = string.split(" ");
	for (i=0; i<=eng.length; i++){
		for(var prop in englishToSwedish){
			if(eng[i] == prop){
				eng[i] = englishToSwedish[prop]
			}
		}
	}return eng.join(" ")
};
