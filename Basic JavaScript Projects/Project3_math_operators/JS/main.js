function math_Function() {
    addition_Function();
    subtraction_Function();
    multiplication_Function();
    division_Function();
    more_Math();
    modulus_Operator();
    increase_Function():
    decrease_Function();
    document.getElementById("solve").innerHTML;
}

function addition_Function() {                                               //define and name function
    var addition = 3 + 6;                                                    //define variable
    document.getElementById("math").innerHTML = "3 + 6 = " + addition;       //put value into result in HTMl element
}

function subtraction_Function() {
    var substraction = 3 - 4;
    document.getElementById("sub").innerHTML = "3 - 4 = " + subtraction;
}

function multiplication_Function() {
    var multiplication = 5 * 5;
    document.getElementById("times").innerHTML = "5 x 5 = " + simple_Math;
}

function division_Function() {
    var division = 4 / 2;
    document.getElementById("divide").innerHTML = "4 / 2 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (2 + 4) * 6 / 2;
    document.getElementById("many").innerHTML = "2 plus 4, multiplied by 6, divided in half equals" + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 11 % 2;
    document.getElementById("remain").innerHTML = "When you divid 11 by 2 you have a remainder of: " + simple_Math;
}

function increase_Function() {
    var x = 4;
    x++;
    document.write(x);
}

function decrease_Function() {
    var y = 6;
    y--;
    document.write(y);
}