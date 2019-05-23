function extractSubsequence(arr){
    let result = [];
    let max = arr[0];

    for (const number of arr) {
        if(number >= max){
            max = number;
            result.push(max);
        }
    }

    console.log(result.join('\n'));
}

extractSubsequence([1, 3, 8, 4, 10, 2])