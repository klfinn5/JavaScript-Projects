document.writeln("<br>" + typeof "bird");                             //define string

function comparisons() {                                              //name fundtion 

    document.getElementById("coer").innerHTML = ("15"+2);             //define coercion comparison
    document.getElementById("less").innerHTML = (7 < 9);             //define less than comparison
    document.getElementById("great").innerHTML = (54 > 4);           //define greater than comparison
    document.getElementById("double").innerHTML = (2 == 2);          //define double equal comparison

    x="marigold";                                                     //define variable 
    y="lavendar";                                                     //define variable
    document.getElementById("triple").innerHTML = (x === y);          //define triple qual comparison
 
    document.getElementById("and").innerHTML = (8<11 && 3<1);         //define and comparison
    document.getElementById("or").innerHTML = (7>2 || 4>3);           //define or comparison
      

    document.getElementBy("exclaim").innerHTML = ! (2<5)              // define not comparison
}
