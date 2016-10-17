//find longest word()
function longestWord (words){

	var currentWord;
	var numWords = words.length;
	var longestWord = "";
	for(var i=0; i<numWords; i++){
		currentWord = words[i];
		if(currentWord.length > longestWord.length){
			longestWord = currentWord
		}
	}
	return ("The longest word is: " + longestWord + " and its length is: " + longestWord.length);
}
longestWord(["nah","asdfi","palabra"])