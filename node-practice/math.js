function mathCal(num1, num2, operation){
    return operation(num1, num2);
}

function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}

console.log(mathCal(5, 10, multiply));