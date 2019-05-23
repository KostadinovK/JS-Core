function orbit(args){
    let rows = args[0];
    let cols = args[1];
    let starRow = args[2];
    let starCol = args[3];

    let matrix = [];
    for(let row = 0; row < rows; row++){
        matrix.push(new Array(cols).fill(0));
    }
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '));
    }
}

orbit([4, 4, 0, 0]);