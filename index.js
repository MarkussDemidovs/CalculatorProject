console.log("started!");

let fulloperation = 0;
const display = document.getElementById("display");

function appendDisplay(input) {
    display.value += input;
}

function clearDisplay(){
    display.value = null;
}

function changePN() {
    //TBA
}

function calc() {
    display.value = eval(display.value);

}