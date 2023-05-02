let operatorSymbol = "";
let firstNumber = "";
let secondNumber = "";
let displayValue = "";

let one = document.querySelector("#one")




function operate() {
    let result = 0;

    if (operatorSymbol == "plus") result = firstNumber + parseInt(document.querySelector(".screen").innerHTML);
    if (operatorSymbol == "minus") result = firstNumber - parseInt(document.querySelector(".screen").innerHTML);
    if (operatorSymbol == "divide") result =  firstNumber / parseInt(document.querySelector(".screen").innerHTML);
    if (operatorSymbol == "multiply") result =  (firstNumber) * (parseInt(document.querySelector(".screen").innerHTML));
    document.querySelector(".screen").innerHTML = result;
    return result;
    
};

//Na základě kliknutého číselného tlačítka se toto číslo přidá k ostatním na obrazovce 
//To pak tvoří celé číslo, se kterým manipulujeme ve funkci operate()
function displayButton(button) {
    document.querySelector(".screen").innerHTML += button.value;

}



function clearScreen() {
    document.querySelector(".screen").innerHTML = "";
}
//Pokud uživatel klikne na "operator" znaménko na kalkulačce --> uloží dosud naklikanou hodnotu do firstNumber a promaže HTML v div class "scren"
//Zároveň uloží hodnotu stisknutého znaménka do variablu "operator"
function operator(button) {
    firstNumber = parseInt(document.querySelector(".screen").innerHTML);
    document.querySelector(".screen").innerHTML = "";
    operatorSymbol = button.value
    console.log(typeof firstNumber);
    console.log(operatorSymbol);
}