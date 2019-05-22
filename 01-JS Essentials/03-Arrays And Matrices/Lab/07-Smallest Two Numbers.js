/**
 * 
 * @param {Array} nums 
 */
function printSmallestTwoNumbers(nums){
    let minNums = [];

    for(let i = 0; i < 2; i++){
        let indexOfMin = nums.indexOf(Math.min(...nums));
        minNums.push(nums[indexOfMin]);
        nums.splice(indexOfMin, 1);
    }

    console.log(minNums.join(' '));
}

printSmallestTwoNumbers([30, 15, 50, 5]);