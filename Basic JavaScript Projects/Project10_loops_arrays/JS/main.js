function count() {
    var Digit = "";
    var X = 1;
    while (X < 101) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("100count").innerHTML = Digit;
}