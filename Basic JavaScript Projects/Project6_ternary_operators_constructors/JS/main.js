function clients() {
    toc();
    vetAppt();
    count_function();

}



function toc() {                                                                                                    //define ternary function
    document.getElementById("tern").innerHTML = (smaller = (24<25) ? "Cannot rent":"Can rent");                     //define html element

}


function pet(petname, currentage, currentweight, breed) {                                                                                                    //define first part of new operator function
    this.name = petname;                                                                                            //define variables using this operator
    this.age = currentage;
    this.weight = currentweight;
    this.type = breed; 
}

var vanessa = new pet("Bernard", "3 years", "42lbs", "corgi");                                                      //assign pet as operator
function vetAppt() {                                                                                                //bring function and variable together
    document.getElementById("keywords").innerHTML = "We have a " + pet.type + "named " + pet.name + "he is " + pet.age + "and " + pet.weight;
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