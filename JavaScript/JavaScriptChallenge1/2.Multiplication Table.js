//Multiplication Table
function tabla(){
    var tablas = []
    for (a=1; a<=10; a++){

        for (i=1; i<=10; i++){
            tablas.push(i*a + "\t");
        }
    tablas.push("\n")
    }
console.log(tablas.join(""));    

}
tabla();