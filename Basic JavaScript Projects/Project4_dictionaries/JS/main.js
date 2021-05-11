function my_dictionary() {
    var dinner = {
        appetizer: "blooming onion",
        entree: "steak",
        side1: "mashed potatoes",
        side2: "broccoli",
        seasoning: "salt, pepper, garlic",
        dessert: "chocolate lava cake"
    };
    delete dinner.dessert;
    document.getElementById("dictionary").innerHTML = dinner.dessert;
}