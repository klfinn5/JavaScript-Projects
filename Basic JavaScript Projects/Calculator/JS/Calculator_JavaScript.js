//creates object to keep track of values
const Calculator = {
    //displays 0 on screen
    Display_Value: '0',
    //will hold first operand for any expressions, set null for now
    First_Operand: null,
    //checks if second operand has been inpuot
    Wait_Second_Operand: false,
    //hold operator set to null for now
    operator: null,
};

//modifies values each time button clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //checking if waitSO is true and set DV to key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //overwrites DV current value is 0 otherwise adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;

    }
}

//decimal points
function Input_Decimal(dot) {
    //ensures accidental clicking of dp doesnt cause bugs in oepration
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //if DV doesnt have decimal point we add it
        Calculator.Display_Value += dot;
    }
}

//operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    //when op key prssed convert current number on screen 
    //to a number and store results  in calFO if doesnt exist already
    const Value_of_Input = parseFloat(Display_Value);
    //checks if op exists and if waitSO is true, then updates op and exits func
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//checks if op exists
        const Value_Now = First_Operand || 0;
        //if op exists, property lookup is performed for op
        //in Perform_Calc object and func that match op is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //add fixed amount of numbers after decimal
        result = Number(result).toFixed(9)
        //remove trailins 0s
        result = (result*1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }

    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//function updates screen with contents of DV
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}


Update_Display();
//monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //target var object that represents element that was clicked
    const { target } = event;
    //if element that was clicked on is not a button exit the func
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //ensures AC clears numbers from calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})