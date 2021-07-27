class Calculator {
    firstNumber;
    secondNumber;
    operator;
    value;

    constructor(firstNumber, secondNumber, operator) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operator = operator;
        this.value = 0;
    }

    // determine the current operation's label
    getAction() {
        switch(this.operator){
            case "add": 
                return "adding"
                break
            case "subtract":
               return "subtracting"
                break
            case "multiply":
                return "multiplying"
                break
            case "divide":
                return "dividing"
                break
        }
    }

    // performa a calculation based on the currently selected operation
    operate() {this.operator=="add"?this.add():(this.operator=="subtract"?this.subtract():(this.operator=="multiply"?this.multiply():this.divide()))}

    attemptedDivideByZero = false;

    // perform addition operation
    add() { this.value = this.firstNumber + this.secondNumber;}

    // perform subtraction operation
    subtract() {this.value = this.firstNumber - this.secondNumber;}

    // perform multiplication operation
    multiply() {this.value = this.firstNumber * this.secondNumber;}

    // perform divide operation
    divide() {attemptedDivideByZero?"":( this.value = this.firstNumber / this.secondNumber);}
}

//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Calculator;
