//count to 100 by 1 with while loop

function count() {
    var Digit = "";
    var X = 1;
    while (X < 101) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("100count").innerHTML = Digit;
}

//list needs for changing diaper with for loop

var needs = ["diapers", "wipes", "butt ointment"];
var content = "";
var y;
    function loop() {
        for (y = 0; y < needs.length; y++) {
            content += needs[y] + "<br>";
        }
        document.getElementById("babylove").innerHTML = content;
    }

//picking alien action with array

function alien() {
    var alienimg = [];
    alienimg[0] = "disecting";
    alienimg[1] = "flying";
    alienimg[2] = "abducting";
    document.getElementById("ufo").innerHTML = "Watch out! There have been aliens in UFOs " + alienimg[1] + "!";
}

//declaring numbers with let keyword

var x = 1738;
document.write(x);
{                                        //cannot be assessed outside of block
    let x = 666;
    document.write("<br>" + x);
}
document.write("<br>" + x);