//swapCase
var swapCase = function(word){
    var swapedString = "";
    for(var i = 0; i<word.length; i++){
        if(word[i] === word[i].toLowerCase()){
            swapedString += word[i].toUpperCase();
        }else{
            swapedString += word[i].toLowerCase();
        }
    }
    return swapedString;
}



