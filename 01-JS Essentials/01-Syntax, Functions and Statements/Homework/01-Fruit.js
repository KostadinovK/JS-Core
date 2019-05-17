/**
 * 
 * @param {String} fruit 
 * @param {Number} weight 
 * @param {Number} priceperKg 
 */
function calcMoney(fruit, weight, priceperKg){
    let kilograms = (weight / 1000);
    console.log(`I need $${(priceperKg * kilograms).toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

calcMoney('orange', 2500, 1.80);
calcMoney('apple', 1563, 2.35);