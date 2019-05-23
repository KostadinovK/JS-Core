function isMatrixMagical(matrix){
    let isMagical = true;
    let magicalSum = matrix[0].reduce((accumulator, currentValue) => accumulator + currentValue);

    for(let row = 0; row < matrix.length; row++){
        let rowSum = matrix[row].reduce((accumulator, currentValue) => accumulator + currentValue);
        if(rowSum != magicalSum){
            isMagical = false;
            break;
        }
    }

    if(isMagical){
        for(let col = 0; col < matrix[0].length; col++){
            let colSum = 0;
            for(let row = 0; row < matrix.length; row++){
                colSum += matrix[row][col];
            }

            if(colSum != magicalSum){
                isMagical = false;
                break;
            }
        }
    }

    return isMagical;
}

console.log(isMatrixMagical([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));