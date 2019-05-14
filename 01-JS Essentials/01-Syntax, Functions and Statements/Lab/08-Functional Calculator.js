/**
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 * @param {String} operator 
 */
function calc(num1, num2, operator){
    let add = (num1, num2) => num1 + num2;
    let substract = (num1, num2) => num1 - num2;
    let multiply = (num1, num2) => num1 * num2;
    let divide = (num1, num2) => num1 / num2;
    
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return substract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

console.log(calc(2, 4, '+'));