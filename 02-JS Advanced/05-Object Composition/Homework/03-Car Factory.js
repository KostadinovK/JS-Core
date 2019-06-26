function carFactory(requirements){

    let engines = {
        small: {
            power: 90,
            volume: 1800
        },
        normal: {
            power: 120,
            volume: 2400
        },
        monster:{
            power: 200,
            volume: 3500
        }
    };

    let carriages = {
        hatchback: {
            type: 'hatchback',
            color: ''
        },
        coupe: {
            type: 'coupe',
            color: ''
        }
    };

    let car = {};
    car.model = requirements.model;
    
    if(requirements.power <= engines.small.power){
        car.engine = engines.small
    }else if(requirements.power <= engines.normal.power){
        car.engine = engines.normal;
    }else if(requirements.power <= engines.monster.power){
        car.engine = engines.monster;
    }
    
    car.carriage = carriages[requirements.carriage];
    car.carriage.color = requirements.color;
    
    let size = requirements.wheelsize;
    if(size % 2 === 0){
        size--;
    }

    car.wheels = [size, size, size, size];
    return car;
}


console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));