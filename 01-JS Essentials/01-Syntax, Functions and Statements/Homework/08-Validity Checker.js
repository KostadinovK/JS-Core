/**
 * 
 * @param {Array} coords 
 */
function validatePoints(coords){
    let x1 = coords[0];
    let y1 = coords[1];
    let x2 = coords[2];
    let y2 = coords[3];

    let distanceFromStartToPoint1 = Math.sqrt(x1 ** 2 + y1 ** 2);
    let distanceFromStartToPoint2 = Math.sqrt(x2 ** 2 + y2 ** 2);
    let distanceFromPoint1ToPoint2 = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    
    if(parseInt(distanceFromStartToPoint1) == distanceFromStartToPoint1){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if(parseInt(distanceFromStartToPoint2) == distanceFromStartToPoint2){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if(parseInt(distanceFromPoint1ToPoint2) == distanceFromPoint1ToPoint2){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validatePoints([3, 0, 0, 4]);
validatePoints([2, 1, 1, 1]);