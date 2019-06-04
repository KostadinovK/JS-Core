function plasmaGiants(plasma, cutSize){
    let firstPart = plasma.slice(0, plasma.length/2);
    let secondPart = plasma.slice(plasma.length/2);

    let firstGiantHealth = 0;
    let secondGiantHealth = 0;
    
    for(let i = 0;i < firstPart.length; i+=cutSize){
        firstGiantHealth += firstPart.slice(i, i + cutSize).reduce((res, num) => res *= num, 1);
        secondGiantHealth += secondPart.slice(i, i + cutSize).reduce((res, num) => res *= num, 1);
    }

    let damagePerHit = Math.min(...plasma);

    let targetHealth = Math.max(...plasma);
    let rounds = 1;

    if(damagePerHit !== 0){
        while(firstGiantHealth > targetHealth && secondGiantHealth > targetHealth){
            firstGiantHealth -= damagePerHit;
            secondGiantHealth -= damagePerHit;
            rounds++;
        }
    }

    if (firstGiantHealth === secondGiantHealth) {
        console.log(`Its a draw ${firstGiantHealth} - ${secondGiantHealth}`);
    } else if (firstGiantHealth > secondGiantHealth) {
        console.log(`First Giant defeated Second Giant with result ${firstGiantHealth} - ${secondGiantHealth} in ${rounds} rounds`);
    } else {
        console.log(`Second Giant defeated First Giant with result ${secondGiantHealth} - ${firstGiantHealth} in ${rounds} rounds`);
    }
}

plasmaGiants([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);
plasmaGiants([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2);