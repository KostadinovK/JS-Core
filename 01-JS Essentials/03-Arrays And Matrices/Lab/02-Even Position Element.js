/**
 * 
 * @param {Array} elements 
 */

function getEvenPositionElements(elements){
    let result = elements.filter((e, i) => i % 2 == 0);
    return result.join(' ');
}

console.log(getEvenPositionElements(['20', '30', '40']));