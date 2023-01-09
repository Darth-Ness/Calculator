var toCalculate = ""; 
var display = document.getElementById('display');
function clearScreen() {
    toCalculate = "";
    display.innerHTML = "";
    console.log(display.innerHTML);
}
function calculate() {
    display.innerHTML = eval(toCalculate);
    toCalculate = "";
} 
function add(char){
    toCalculate+=char;
    display.innerHTML = toCalculate;
}
function deleteLastChar() {
    toCalculate = toCalculate.slice(0,toCalculate.length-1);
    display.innerHTML = toCalculate;
}
function root() {
    display.innerHTML = Math.sqrt(display.innerHTML);
    toCalculate = display.innerHTML;
}
