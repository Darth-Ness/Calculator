var toCalculate = ""; 
var display = document.getElementById('display')
function calculate() {
    display.innerHTML = eval(toCalculate);
    toCalculate = "";
} 
function add(char){
    toCalculate+=char;
    display.innerHTML = toCalculate;
}
function clear() {
    toCalculate = "";
    display.innerHTML = "";
}