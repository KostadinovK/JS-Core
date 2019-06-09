function calcCoffeine(days){

    let beveragesCoffeinePerMl = {
        coffee: 40 / 100,
        cola: 8 / 100,
        tea: 20 / 100,
        energyDrink: 30 / 100
    };

    let totalCaffeine = 0;
    let day = 1;
    while(day <= days){
        totalCaffeine += 3 * 150 * beveragesCoffeinePerMl.coffee;
        totalCaffeine += 2 * 250 * beveragesCoffeinePerMl.cola;
        totalCaffeine += 3 * 350 * beveragesCoffeinePerMl.tea;
        if(day % 5 == 0){
            totalCaffeine += 3 * 500 * beveragesCoffeinePerMl.energyDrink;
        }

        if(day % 9 == 0){
            totalCaffeine += 4 * 250 * beveragesCoffeinePerMl.cola + 2 * 500 * beveragesCoffeinePerMl.energyDrink;
        }
        day++;
    }

    return `${totalCaffeine} milligrams of caffeine were consumed`;
}

console.log(calcCoffeine(5));
console.log(calcCoffeine(8));
