//Pâlindromo

function palindromeCheck(word){
	var normalWord = word;
	var reverseWord =  word.split("").reverse().join("");
	/*console.log(normalWord)
	console.log(reverseWord)
	console.log(normalWord.split(" ").join(""))
	console.log(reverseWord.split(" ").join(""))
	*/

	if(normalWord.split(" ").join("") == reverseWord.split(" ").join("")){
		return("Son palindromos!!!")
	}else{
		return("No son palindromos :(")
	}
}