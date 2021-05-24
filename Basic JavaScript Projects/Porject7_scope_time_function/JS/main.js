var a = 12;                                                                    //variable outside function
function adding1() {                                                           //define global function
    document.write(3 + a + "<br>");
}

function adding2() {                                                            //define global function2
    document.write(a + 20);
}


function adding3() {                                                            //define local function
    var b = 5;                                                                  //variable inside function
    document.write(15 + b + "<br>");
}

function adding4() {                                                            //define local function2
    console.log(b + 6);                                                         //console.log to debug
}

function ifstate() {                                                           //define if statment
    if (17 < 18) {
        document.write("You are underage.")
    }
}

function FullYear() {                                                          //define year function
    var c = new Date();
    document.getElementById("year").innerHTML = c.getFullYear();
    }


function Time_function() {                                                     //define time function
    var time = new Date().getHours();
    var reply; 
    if (time < 12 == time > 0) {                                               //morning reply
        reply = "Good morning :)";
    }
    else if (time >= 12 == time < 18) {                                        //afternoon reply
        reply = "Good afternoon :D";
    }
    else {                                                                     //evening reply
        reply = "Good evening :3";
    }
    document.getElementById("what_time").innerHTML = reply;
}
