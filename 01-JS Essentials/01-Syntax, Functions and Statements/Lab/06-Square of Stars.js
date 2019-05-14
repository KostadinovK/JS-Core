/**
 * 
 * @param {Number} n 
 */
function drawSquare(n = 5) {
    for (let row = 0; row < n; row++) {
        console.log('*'.repeat(n).split('').join(' '));
    }
}

drawSquare();