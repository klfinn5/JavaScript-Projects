function math_Function() {                                                //define multi-function function
    addition_Function();
    subtraction_Function();
    multiplication_Function();
    division_Function();
    more_Math();
    modulus_Operator();                             
}

function addition_Function() {                                               //define and name function
    var addition = 3 + 6;                                                    //define variable as addition
    document.getElementById("math").innerHTML = "3 + 6 = " + addition;       //put value into result in HTMl element
}

function subtraction_Function() {                                            //define function
    var subtraction = 3 - 4;                                                 //define variable as subtraction
    document.getElementById("sub").innerHTML = "3 - 4 = " + subtraction;
}

function multiplication_Function() {                                         
    var multiplication = 5 * 5;                                              //define variable as multiplication
    document.getElementById("times").innerHTML = "5 x 5 = " + multiplication;
}

function division_Function() {
    var division = 4 / 2;                                                     //define variable as division
    document.getElementById("divide").innerHTML = "4 / 2 = " + division;
}

function more_Math() {
    var simple_Math = (2 + 4) * 6 / 2;                                        //define variable as multi-problem 
    document.getElementById("many").innerHTML = "(2 + 4) x 6 / 2 =" + simple_Math;
}

function modulus_Operator() {
    var simple_Math2 = 11 % 2;                                                 //define variable as remainder
    document.getElementById("remain").innerHTML = "11 / 2 = Remainder of " + simple_Math2;
}

function increase_Function() {                                                
    var x = 4;                                                                //define variable
    x++;                                                                      //increase variable
    document.write(x);                                                        //document is different- figure how to change for this code
}

function decrease_Function() {
    var y = 6;                                                                //define variable
    y--;                                                                      //decrease variable
    document.write(y);                                                        //same code problem as increase
}

window.alert(Math.random() * 100);                                             //window alert: any number between 0 and 100