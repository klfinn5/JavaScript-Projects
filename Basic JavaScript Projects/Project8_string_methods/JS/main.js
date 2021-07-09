
function meow() {                                                         // define and name function
    var part_1 = "You ";                                                  // define variable
    var part_2 = "Barium";
    var sentence = part_1.concat(part_2);                                 // connect strings
    document.getElementById("conkittycat").innerHTML = sentence;         // define html element
}

function slice_method() {                                                // define and name
    var sentence = "They go on WebMD";                                   // define variable
    var section = sentence.slice(11);                                    // part of answer shown
    document.getElementById("slice").innerHTML = section;                // define html
}

function string_method() {                                               // define and name function
    var x = 789;                                                         //define variable
    document.getElementById("numbers").innerHTML = x.toString();         // define html to show answer
}

function precision_method() {                                            // define and name
    var x = 3.14159265359;                                               // define variable
    document.getElementById("precision").innerHTML = x.toPrecision(3.14); // define html
}