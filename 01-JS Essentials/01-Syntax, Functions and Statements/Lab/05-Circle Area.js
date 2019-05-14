function getCircleArea(rad) {

    if(typeof(rad) != 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(rad)}.`);
        return;
    }

    console.log((Math.PI * Math.pow(rad, 2)).toFixed(2));
}

getCircleArea(5);
getCircleArea('Hello');