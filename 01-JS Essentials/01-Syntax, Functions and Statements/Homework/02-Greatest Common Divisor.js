/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 */

function gcd(a, b){
    let min = Math.min(a, b);

    for (let i = min; i > 0; i--) {
        if(a % i == 0 && b % i == 0){
            return i;
        }   
    }
}

console.log(gcd(15, 5));
console.log(gcd(2154, 458));