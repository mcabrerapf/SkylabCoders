/*function makerSecretWord(pass) {
	var encrypted = ""
	for (i=0; i<pass.length; i++){
		if(pass.charAt(i)=="a" || pass.charAt(i)=="A" ){
			encrypted += "4"
		}else if(pass.charAt(i)=="e" || pass.charAt(i)=="E" ){
			encrypted += "3"
		}else if(pass.charAt(i)=="i" || pass.charAt(i)=="I" ){
			encrypted += "1"
		}else if(pass.charAt(i)=="o" || pass.charAt(i)=="O" ){
			encrypted += "0"
		}else if(pass.charAt(i)=="u" || pass.charAt(i)=="U" ){
			encrypted += "8"
		}else{
			encrypted += pass.charAt(i)
		}
	}return encrypted
}

*/

function User ( name, username, password) {

    this.name = name;
   this.username = username;
   this.password = User.encrypt(password);

}

User.encrypt = function( text ){
    passSecret = text;
    var encrypt = text.replace(/a/g, "2");
    encrypt =  encrypt.replace(/e/g, "4");
    encrypt =  encrypt.replace(/i/g, "0");
    encrypt =  encrypt.replace(/o/g, "1");
    encrypt =  encrypt.replace(/u/g, "3");
    return encrypt


}

User.prototype.decryptPassword = function () {
    return student.password = passSecret
}


var student  = new User("juanma", "Guitar", "aaakkkkeeekkikokkukkuuu");