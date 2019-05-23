function modifyMatrix(arr){
    let matrix = [];

    for (const row of arr) {
        let data = row.split(' ').map(Number);
        matrix.push(data);
    }

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            if(row == col){
                firstDiagonalSum += matrix[row][col];
            }

            if(row + col == matrix.length - 1){
                secondDiagonalSum += matrix[row][col];
            }
        }
    }

    if(firstDiagonalSum == secondDiagonalSum){

        for(let row = 0; row < matrix.length; row++){
            for(let col = 0; col < matrix[row].length; col++){

                if(row != col && row + col != matrix.length - 1){
                    matrix[row][col] = firstDiagonalSum;
                }
            }
        }
    }

    for(let row = 0; row < matrix.length; row++){
        console.log(matrix[row].join(' '));
    }
}

modifyMatrix(
    ['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);