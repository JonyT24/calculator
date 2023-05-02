let operator = "";
let firstNumber = "";
let secondNumber = "";
let displayValue = "";

let one = document.querySelector("#one")




function operate(first, second, symbol) {
    let result;
    if (symbol = "plus") result = first + second;
    if (symbol = "minus") result = first - second;
    if (symbol = "divide") result =  first / second;
    if (symbol = "multiple") result =  first * second;

    return result;
};


function displayButton(button) {
    document.querySelector(".screen").innerHTML += button.value;
}



function clearScreen() {
    document.querySelector(".screen").innerHTML = "";
}