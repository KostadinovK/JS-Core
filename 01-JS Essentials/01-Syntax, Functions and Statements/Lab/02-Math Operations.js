/**
 * @param {Number} firstOperand 
 * @param {Number} secondOperand 
 * @param {String} operator 
 */

function performOperation(firstOperand, secondOperand, operator){
    switch(operator){
        case "+":
            return firstOperand + secondOperand;
        case "-":
            return firstOperand - secondOperand;
        case "*":
            return firstOperand * secondOperand;
        case "/":
            return firstOperand / secondOperand;
        case "%":
            return firstOperand % secondOperand;
        case "**":
            return firstOperand ** secondOperand;        
    }
}

console.log(performOperation(2, 2, "**"));