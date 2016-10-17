//Longest
function longestWords (words){
	var wWords = words.split(" ")
	console.log(wWords)
	var currentWord;
	var numWords = wWords.length;
	var longestWord = "";
	for(var i=0; i<numWords; i++){
		currentWord = wWords[i];
		if(currentWord.length > longestWord.length){
			longestWord = currentWord
		}
	}
	return ("The longest word is: " + longestWord + " and its length is: " + longestWord.length);
}
longestWords("no se que hace esto")
