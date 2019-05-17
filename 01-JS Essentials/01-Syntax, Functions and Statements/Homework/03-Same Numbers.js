/**
 * 
 * @param {Number} n 
 */
function hasSameDigits(n){
    
    let sameDigits = true;
    let firstDigit = n % 10;
    let sum = firstDigit;

    n = parseInt(n / 10);

    while(n > 0){
        let digit = n % 10;
        sum += digit;
        if(firstDigit != digit){
            sameDigits = false;
        }
        n = parseInt(n / 10);
    }
    console.log(sameDigits);
    console.log(sum);
}

hasSameDigits(222);
hasSameDigits(123);