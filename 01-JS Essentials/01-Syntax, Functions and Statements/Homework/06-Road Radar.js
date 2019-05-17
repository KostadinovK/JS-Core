/**
 * 
 * @param {Array} arr 
 */
function roadRadar(arr){

    let areasMaxSpeed = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    let speed = Number(arr[0]);
    let area = arr[1];

    if(areasMaxSpeed[area] < speed){
        if(speed - areasMaxSpeed[area] <= 20){
            return 'speeding';
        }else if(speed - areasMaxSpeed[area] <= 40){
            return 'excessive speeding';
        }else{
            return 'reckless driving';
        }
    }

    return "";
}

console.log(roadRadar([40, 'city']));
console.log(roadRadar([21, 'residential']));
console.log(roadRadar([120, 'interstate']));
console.log(roadRadar([200, 'motorway']));
