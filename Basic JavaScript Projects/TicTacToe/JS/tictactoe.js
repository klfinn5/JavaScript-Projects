//keep track of turns
let activePlayer = 'X';
// this array stores array of moves, used to determine win conditions
let selectedSquares = [];

//places x or o in square
function placeXOrO(squareNumber) {
    //condition ensures square hasnt been selected already
    // .some() method to check each element of selectedSquare array
    // to see if it contains square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //var retrieves html id that was clicked
        let select = document.getElementById(squareNumber);
        //this condition checks turns
        if (activePlayer === 'X') {
            //if activeplayer is x then x.png placed in html
            select.style.backgroundImage = 'url("images/bunny1.png")';
            //activeplayer may only be x or o, if not x then o
        } else {
            //if activeplayer is o then o.png in html
            select.style.backgroundImage = 'url("images/bunny2.png")';
        }
        //squarenumber and activeplayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //calls a function to check for win conditions
        checkWinConditions();
        //condition changing activeplayer
        if (activePlayer === 'X') {
            //if AP is x change it to o
            activePlayer = 'O';
            //if AP is anything other than x
        } else {
            //change AP to x
            activePlayer = 'X';
        }

        //sound placement
        audio('./media/place2.mp3');
        //condition checks to see if computer turn
        if(activePlayer === 'O') {
            //disables clicking for computer choice
            disableClick();
            //waits 1 sec before computer places img and enables click
            setTimeout(function () { computersTurn(); }, 1000)
        }
        //returning true is needed for computerturn to work
        return true;

        }
        //function results in random square being selected
        function computersTurn() {
            //boolean needed for while loop
            let success = false;
            //var stores random number 0-8
            let pickASquare;
            //condition allows while loop to keep trying if square is selected already
            while(!success) {
                //random number between 0 and 8 selected
                pickASquare = String(Math.floor(Math.random() * 9));
                //if random number evaluated returns true the square hasnt been selected
                if (placeXOrO(pickASquare)) {
                    //line calls function
                    placeXOrO(pickASquare);
                    //changes boolean and ends loop
                    success = true;
                };
            }
        }
    }


//func parses selectedsquares array to search win conditions
//drawwinline func called to draw line if conditions met
function checkWinConditions() {
    //X 0,1,2 condition
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // x 3,4,5
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // x 6,7,8
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    // x 0,3,6
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    // x 1,4,7
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    // x 2,5,8
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    // x 6,4,2
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    // x 0,4,8
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    // o 0,1,2
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    // o 3,4,5
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    // o 6,7,8
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    //o 0,3,6
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    // o 1,4,7
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    // o 2,5,8
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    // o 6,4,2
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    // o 0,4,8
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    
    //checks for tie, if none above conditions register and 9
    //squares selected the code executes
    else if (selectedSquares.length >= 9) {
        //plays tie sound
        audio('./media/tie2.mp3');
        //function sets .3 sec timer before resetgame is called
        setTimeout(function () { resetGame(); }, 1000);
    }
    
    //checks if array includes 3 strings. used to check for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //3 var used to check 3 ina row
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        //if all 3 included in array true is returned and else if exectes drawWL
        if ( a === true && b === true && c === true) { return true }
    }
}

//makes body temp unclickable
function disableClick() {
    //makes unclickable
    body.style.pointerEvents = 'none';
    //makes clickable after 1 sec
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//takes string parameter of path set earlier for placement sound
function audio(audioURL) {
    //create new audio object and pass path as parameter
    let audio = new Audio(audioURL);
    //play method plays audio sound
    audio.play();
}

//html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //line accesses html canvas element
    const canvas = document.getElementById('win-lines')
    //line gives access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //line indicates where start of x axis is
    let x1 = coordX1,
        //line indicates start of y axis is
        y1 = coordY1,
        //end x axis
        x2 = coordX2;
        //end y axis
        y2 = coordY2,
        //var stores temp x axis data we update in animation loop
        x = x1,
        //var stores temp y axis
        y = y1;

    //interacts with canvas
    function animateLineDrawing() {
        //var creates loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //method clears content from last loop
        c.clearRect(0, 0, 608, 608)
        //new path
        c.beginPath();
        //moves to starting point for line
        c.moveTo(x1, y1)
        //indicates end point for line
        c.lineTo(x, y)
        //width of line
        c.lineWidth = 10;
        //line color
        c.strokeStyle = 'rgba(70,255, 33, .8)';
        //draws everything laid out above
        c.stroke();
        //checks if reached endpoint
        if (x1 <= x2 && y1 <= y2) {
            //condition adds 10 to prev end x point
            if ( x < x2) {x += 10;}
            //condition add 10 to prev end y point
            if ( y < y2 ) {y += 10;}
            //condition cancels animation loop
            //if reached end points
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //condition similar to above
        //necessary for 6,4,2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    // function clears canvas afte win line drawn
    function clear() {
        //line starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        //line clears canvas
        c.clearRect(0, 0, 608, 608);
        //line stops animation loop
        cancelAnimationFrame(animationLoop);
    }
    //line disallows clicking while win sound playing
    disableClick();
    //line plays win sounds
    audio('./media/winGame2.mp3');
    //line calls main animation loop
    animateLineDrawing();
    //line waits 1 sec then clears, resets, allows clicking
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//resets game
function resetGame() {
    //loop iterates thru html square element
    for (let i = 0; i < 9; i++) {
        //var gets html of i
        let square = document.getElementById(String(i))
        //remove elements backgroungimg
        square.style.backgroundImage = ''
    }
    //resets array
    selectedSquares = [];
}

