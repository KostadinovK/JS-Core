/**
 * 
 * @param {Array} arr 
 */

function printModifiedArray(arr){
    let res = [];

    arr.forEach(e => {
        if(e < 0){
            res.unshift(e);
        }else{
            res.push(e);
        }
    });

    console.log(res.join('\n'));
}

printModifiedArray([7, -2, 8, 9]);