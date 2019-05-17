/**
 * 
 * @param {Array} args 
 */
function calorieFactory(args){
    let calorie = {}
    for (let i = 0; i < args.length - 1; i += 2) {
        calorie[args[i]] = Number(args[i + 1]);
    }

    return calorie;
}

console.log(calorieFactory(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]));
console.log(calorieFactory(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]));