function add(a, b){
    return a + b;
}
const subtract = function(a, b){
    return a-b
};
const multiply = (a, b) => a * b;
function startCalculator(){
    const a = parseFloat(prompt("Enter First Number:"))
    const b = parseFloat(prompt("Enter Second Number:"))
   if(isNaN(a) || isNaN(b)){
    document.getElementById("result").textContent = "Invalid input. Please Enter numbers."
    return
   } 
   `Add: ${add(a, b)}| Subtract: ${subtract(a, b)}|Multiply: ${multiply(a, b)}`
   document.getElementById("result").textContent = resultText
}