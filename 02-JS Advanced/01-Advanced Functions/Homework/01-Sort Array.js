function sortArray(arr, sortingWay){
    if(sortingWay === 'asc'){
        return arr.sort((a, b) => a - b);
    }else if(sortingWay === 'desc'){
        return arr.sort((a, b) => b - a);
    }
}

console.log(sortArray([1, 2, 3,], 'desc'));
console.log(sortArray([3, 2, 1], 'asc'));