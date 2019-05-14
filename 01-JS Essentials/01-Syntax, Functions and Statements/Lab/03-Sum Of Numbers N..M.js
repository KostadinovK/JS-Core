/**
 * 
 * @param {String} n 
 * @param {String} m 
 */

function sum(n, m){
    let sum = 0;
    n = Number(n);
    m = Number(m);
    for (let i = n; i <= m; i++){
        sum += i;
    }

    return sum;
}

console.log(sum('1', '5'));