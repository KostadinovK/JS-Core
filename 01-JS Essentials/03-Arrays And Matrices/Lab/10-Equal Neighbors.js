/**
 * 
 * @param {Array} matrix 
 */
function getEqualPairsCount(matrix){
    let equalPairs = 0;

    //get equalPairs by columns
    for(let col = 0; col < matrix[0].length; col++){
        for(let row = 0; row < matrix.length - 1; row++){
            if(matrix[row][col] === matrix[row + 1][col]){
                equalPairs++;
            }
        }
    }

    //get equalPairs by rows
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length - 1; col++){
            if(matrix[row][col] === matrix[row][col + 1]){
                equalPairs++;
            }
        }
    }

    return equalPairs;
}

console.log(getEqualPairsCount([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));