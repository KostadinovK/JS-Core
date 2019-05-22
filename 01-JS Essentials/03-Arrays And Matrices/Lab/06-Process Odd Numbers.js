/**
 * 
 * @param {Array} nums 
 */

function processOddNumbers(nums){
    let result = nums.filter((n, i) => i % 2 != 0).map(n => n * 2).reverse().join(' ');
    console.log(result);
}

processOddNumbers([10, 15, 20, 25]);