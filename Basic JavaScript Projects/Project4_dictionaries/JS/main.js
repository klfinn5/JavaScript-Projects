function my_dictionary() {                                                //define variable
    var dinner = {
        appetizer: "blooming onion",
        entree: "steak",
        side1: "mashed potatoes",
        side2: "broccoli",
        seasoning: "salt, pepper, garlic",
        dessert: "chocolate lava cake"
    };
    delete dinner.dessert;                                               // delete output
    document.getElementById("dictionary").innerHTML = dinner.dessert;    // ouput
}