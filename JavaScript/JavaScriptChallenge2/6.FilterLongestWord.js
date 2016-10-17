function filterLongestWord (words){

	var currentWord;
	var numWords = words.length;
	var longestWord = 5;
	var longWords = [];
	for(var i=0; i<numWords; i++){
		currentWord = words[i];
		if(currentWord.length > longestWord){
			longWords.push(currentWord)
		}
	}
	return longWords
}
filterLongestWord(["nah","asdfi","palabra","externocleidomastoideo","cincoletras"])