// add function
function add(num1, num2){
    return num1 + num2;
}

//subtract function
function subtract(num1, num2){
    return num1 - num2;
}

// multiply function
function multiply(num1, num2){
    return num1*num2;
}

//division function
function divide(num1, num2) {
    return num1/num2;
}

// calculator function
function calculator(num1, num2, operator){
    return operator(num1, num2);
    
}

calculator(25, 10, multiply);
console.log(operator)
