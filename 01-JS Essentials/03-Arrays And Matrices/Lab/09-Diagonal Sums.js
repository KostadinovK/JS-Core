/**
 * 
 * @param {Array} matrix 
 */
function printDiagonalSums(matrix){
    let diagonalSums= [];
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){

            if(row == col){
                firstDiagonalSum += matrix[row][col];
            }
            
            if((row + col) == (matrix.length - 1)){
                secondDiagonalSum += matrix[row][col];
            }
            
        }
    }

    diagonalSums.push(firstDiagonalSum);
    diagonalSums.push(secondDiagonalSum);

    console.log(diagonalSums.join(' '));
}

printDiagonalSums([
    [20, 40],
    [10, 60]
]);