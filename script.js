let operatorSymbol = "";
let firstNumber = "";
let secondNumber = "";
let displayValue = "";



let one = document.querySelector("#one")

document.querySelector(".result-value").innerHTML = "0";



function operate() {
    if (operatorSymbol == "+") firstNumber += parseFloat(document.querySelector(".result-value").innerHTML);
    if (operatorSymbol == "-") firstNumber -= parseFloat(document.querySelector(".result-value").innerHTML);
    if (operatorSymbol == "÷") firstNumber /= parseFloat(document.querySelector(".result-value").innerHTML);
    if (operatorSymbol == "x") (firstNumber) *= parseFloat(document.querySelector(".result-value").innerHTML);
    document.querySelector(".result-value").innerHTML = firstNumber.toFixed(2);
    document.querySelector(".temp-value").innerHTML = "";
    return firstNumber;

};

//Na základě kliknutého číselného tlačítka se toto číslo přidá k ostatním na obrazovce 
//To pak tvoří celé číslo, se kterým manipulujeme ve funkci operate()
function displayButton(button) {
    if (document.querySelector(".result-value").innerHTML === "0") {
        document.querySelector(".result-value").innerHTML = "";
    }
    document.querySelector(".result-value").innerHTML += button.value;

}

function pointButton() {
    if (document.querySelector(".result-value").innerHTML.includes('.')) return;
    else document.querySelector(".result-value").innerHTML += '.';
}


//Pokud uživatel klikne na "operator" znaménko na kalkulačce --> uloží dosud naklikanou hodnotu do firstNumber a promaže HTML v div class "scren"
//Zároveň uloží hodnotu stisknutého znaménka do variablu "operator"
function operator(button) {
    checkForPoint();
    firstNumber = parseFloat(document.querySelector(".result-value").innerHTML);
    document.querySelector(".result-value").innerHTML = "0";
    operatorSymbol = button.value
    document.querySelector(".temp-value").innerHTML = firstNumber + " " + operatorSymbol;
    

}

function clearScreen() {
    document.querySelector(".result-value").innerHTML = "0";
    document.querySelector(".temp-value").innerHTML = "";
    
}

function deleteNumber() {
   let string = document.querySelector(".result-value").innerHTML
   string = string.slice(0,-1);
   document.querySelector(".result-value").innerHTML = string;
}

function checkForPoint() {
   let string = document.querySelector(".result-value").innerHTML
   let result = string.includes("5")
   
   console.log(result);
}

//TODO 
//Napsat funkci, která nenechá uživatele napsat více jak jednu tečku v číslu 

//Zkusit udělat celá čísla tak, aby pokud není zbytek, zobrazí se pouze číslo bez dvou nul 