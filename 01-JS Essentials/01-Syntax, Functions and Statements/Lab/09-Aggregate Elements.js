/**
 * 
 * @param {Array} arr 
 */
function aggregateElements(arr){
    let sum = 0;
    let inversedSum = 0;
    let combined = '';

    for (const element of arr) {
        sum += element;
        inversedSum += 1 / element;
        combined += element;
    }

    console.log(sum);
    console.log(inversedSum);
    console.log(combined);
}

aggregateElements([1, 2, 3]);