/**
 * 
 * @param {Array} towns 
 */
function sumByTown(towns){
    let townsJSON = {};
    for (let i = 0; i < towns.length - 1; i+=2) {
        let currTown = towns[i];

        if(!townsJSON[currTown]){
            townsJSON[currTown] = 0;
        }

        townsJSON[currTown] += Number(towns[i + 1]);
    }

    console.log(JSON.stringify(townsJSON));
}

sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);
sumByTown(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']);