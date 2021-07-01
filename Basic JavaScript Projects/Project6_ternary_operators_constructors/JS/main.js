function clients() {
    toc();
    vetAppt();
    count_function();

}



function toc() {                                                                                                    //define ternary function
    document.getElementById("tern").innerHTML = (smaller = (24<25) ? "Cannot rent":"Can rent");                     //define html element

}


function pet(name, age, weight, breed) {                                                                                                    //define first part of new operator function
    this.name = name;                                                                                            //define variables using this operator
    this.age = age;
    this.weight = weight;
    this.type = breed; 
}

var vanessa = new pet("Bernard", "3 years", "42lbs", "corgi");                                                      //assign pet as operator
function vetAppt() {                                                                                                //bring function and variable together
    document.getElementById("keywords").innerHTML = "We have a " + vanessa.type + " named " + vanessa.name + " he is " + vanessa.age + " and " + vanessa.weight + ".";           //define function with "vanessa" var not "pet"
} 


function count_function() {                                                                                          //define nested function
    document.getElementById("counting").innerHTML = count();
    function count() {
        var current = 20;
        function plus_five () {current += 5;}
        plus_five();
        return current;
    }
}