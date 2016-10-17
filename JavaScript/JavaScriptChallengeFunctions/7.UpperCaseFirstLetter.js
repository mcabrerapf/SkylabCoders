//UpperCaseFirstLetter
function UpperCaseFirstLetter(string){
	var wordArray = string.split(" ");
	var currentWord = ""
	console.log(wordArray)
	for(i=0; i<wordArray.length; i++){
		currentWord=wordArray[i]
		currentWord[0] =currentWord.charAt(0).toUpperCase()
		console.log(currentWord)
	}
}
UpperCaseFirstLetter("No se si esto servira")
