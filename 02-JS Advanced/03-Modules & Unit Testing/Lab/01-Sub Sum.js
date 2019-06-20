function subSum(arr, startIndex, endIndex){
    if(!Array.isArray(arr)){
        return NaN;
    }

    for (const el of arr) {
        if(typeof el === 'string'){
            return NaN;
        }
    }

    if(startIndex < 0){
        startIndex = 0;
    }

    if(endIndex >= arr.length){
        endIndex = arr.length - 1;
    }

    return arr.reduce((sum, currentNum, currentIndex) => {
        if(currentIndex >= startIndex && currentIndex <= endIndex){
            sum += currentNum;
        }

        return sum;
    },0);
}

console.log(subSum(['1', 20, 30, 40, 50, 60], 3, 300));