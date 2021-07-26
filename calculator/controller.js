// setup variables and get a calculator instance
var calObj;
function CreateCalculator() {
    calObj=new Calculator(parseInt(document.getElementById("IN1").value),parseInt(document.getElementById("IN2").value),getOperator());
}

// perform a calculation when the operator button is clicked
function calculate(  ) {
    CreateCalculator();
    calObj.operate();
    updateResultText(calObj.value);
}

/**
 * set the text in the result section of the UI
 * @param {*} value
 */
function updateResultText(value) {
    let label = document.getElementById("result")
    label.style = "color:black"
    if (!calObj.attemptedDivideByZero) {
    label.innerHTML = "The result of " + calObj.getAction() + " " + calObj.firstNumber + " and " + calObj.secondNumber + " is " + value
    }
    else{
        label.innerHTML = "You cannot divide by zero"
        label.style = "color:red"
    }
}

// should clear input text values and focus the first number input
function clearValues() {
    document.getElementById("IN1").value = null;
    document.getElementById("IN1").focus();
    document.getElementById("IN2").value = null;
}

/**
 * get the selected operator from the UI
 * @returns Operators
 */
function getOperator() {
    let sel = document.getElementsByName("cal")
    var x = "";
    for (var i = 0; i < sel.length; i++){
        if (sel[i].checked){
            x = sel[i].value;
        }
       
    }
    return x;

}
