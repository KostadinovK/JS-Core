function trainStation(wagonCapacity, passengers){
    let wagons = Array(passengers.length).fill(0);
    
    let wagonIndex = 0;
    let remainingPassengers = 0;
    for(let i = 0; i < passengers.length; i++){
        if(wagons[wagonIndex] + passengers[i] <= wagonCapacity){
            wagons[wagonIndex] += passengers[i];
        }else{
            let remainingPeople = passengers[i] - (wagonCapacity - wagons[i]);
            wagons[wagonIndex] += passengers[i] - remainingPeople;
            if(wagonIndex < wagons.length - 1){
                passengers[i+1] += remainingPeople;
            }else{
                remainingPassengers += remainingPeople;
            }
        }
        wagonIndex++;
    }

    console.log(wagons);
    if(remainingPassengers === 0){
        console.log('All passengers aboard');
    }else{
        console.log(`Could not fit ${remainingPassengers} passengers`);
    }
}

trainStation(10, [9, 39, 1, 0, 0]);
trainStation(6, [5, 15, 2]);