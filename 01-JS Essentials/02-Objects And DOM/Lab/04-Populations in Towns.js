/**
 * 
 * @param {Array} data 
 */
function populations(data){

    let dict = {};

    for (const townData of data) {
        let pair = townData.split(/ <-> /);
        let town = pair[0];
        let population = Number(pair[1]);

        if(!dict[town]){
            dict[town] = 0;
        }
        
        dict[town] += population;
    }

    for (const town in dict) {
        console.log(`${town} : ${dict[town]}`);
    }
}

populations(['Sofia <-> 200', 'Varna <-> 100']);