/**
 * 
 * @param {Array} elements 
 */

function sumFirstAndLstElement(elements){
    elements = elements.map(Number);
    return elements[0] + elements[elements.length - 1];
}

console.log(sumFirstAndLstElement(['20', '30', '40']));
console.log(sumFirstAndLstElement(['5', '10']));