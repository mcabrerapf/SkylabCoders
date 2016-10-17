
function freqCheck(string){
var s = "xxaxxaxx";
var counter = 0;
for( var i=0; i<s.length; i++ ) {
    if( s.charAt(i) == 'x' ) {
        counter+=1;
    } 
}
console.log(counter)
}
