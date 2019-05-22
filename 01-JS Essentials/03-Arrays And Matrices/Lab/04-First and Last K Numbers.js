/**
 * 
 * @param {Array} data 
 */
function printFirstAndLastKNumbers(data){

    let k = data[0];
    let nums = data.slice(1);
    
    console.log(nums.filter((n, i) => i < k).join(' '));
    console.log(nums.filter((n, i) => i >= nums.length - k).join(' '));
}

printFirstAndLastKNumbers([2, 7, 8, 9]);