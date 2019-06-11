function displayArrInfo(arr){
    console.log('Sum = ' + reducer(arr, (sum, currElement) => sum += currElement));
    console.log('Min = ' + reducer(arr, (min, currElement) => Math.min(min, currElement)));
    console.log('Max = ' + reducer(arr, (max, currElement) => Math.max(max, currElement)));
    console.log('Product = ' + reducer(arr, (product, currElement) => product *= currElement, 1));
    console.log('Join = ' + reducer(arr, (str, currElement) => str += `${currElement}`), '');

    function reducer(arr, operator, initialValue){
        let result = initialValue;
        let startIndex = 0;
        if(initialValue === undefined){
            startIndex++;
            result = arr[0];
        }

        for(let i = startIndex; i < arr.length; i++){
            result = operator(result, arr[i]);
        }

        return result;
    }
}

displayArrInfo([2, 3, 10, 5]);
displayArrInfo([5, -3, 20, 7, 0.5]);