/**
 * 
 * @param {Array} matrix 
 */

function findMax(matrix){
    let max = Number.MIN_SAFE_INTEGER;
    for (const row of matrix) {
        let rowMax = Math.max(...row);
        max = Math.max(max, rowMax);
    }
    return max;
}

console.log(findMax([[20, 50, 10],[8, 33, 145]]));