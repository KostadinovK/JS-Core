(function solution(args){

    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: {
            protein: 0,
            carb: 1,
            fat: 0,
            flavour: 2
        },
        lemonade: {
            protein: 0,
            carb: 10,
            fat: 0,
            flavour: 20
        },
        burger: {
            protein: 0,
            carb: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            carb: 0,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carb: 10,
            fat: 10,
            flavour: 10
        }
    };

    function restock(microelement, quantity){
        microelements[microelement] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity){
        if(hasEnoughtIngredients(recipe, quantity)){
            cookRecipe(recipe, quantity);
            return 'Success';
        }else{
            return `Error: not enough ${getUnsuffiecentIngredient(recipe, quantity)} in stock`;
        }
    }

    function hasEnoughtIngredients(recipe, quantity){
        let {protein: proteinNeeded, carb: carbNeeded, fat: fatNeeded, flavour: flavourNeeded} = recipes[recipe];
        let {protein, carbohydrate, fat, flavour} = microelements;

        return protein >= proteinNeeded * quantity &&
        carbohydrate >= carbNeeded * quantity &&
        fat >= fatNeeded * quantity &&
        flavour >= flavourNeeded * quantity;
    }

    function cookRecipe(recipe, quantity){
        let {protein, carb, fat, flavour} = recipes[recipe];

        microelements.protein -= protein * quantity;
        microelements.carbohydrate -= carb * quantity;
        microelements.fat -= fat * quantity;
        microelements.flavour -= flavour * quantity;
    }

    function getUnsuffiecentIngredient(recipe, quantity){
        let {protein: proteinNeeded, carb: carbNeeded, fat: fatNeeded, flavour: flavourNeeded} = recipes[recipe];
        let {protein, carbohydrate, fat, flavour} = microelements;

        protein -= proteinNeeded * quantity;
        carbohydrate -= carbNeeded * quantity;
        fat -= fatNeeded * quantity;
        flavour -= flavourNeeded * quantity;

        if(protein < 0){
            return 'protein';
        }

        if(carbohydrate < 0){
            return 'carbohydrate';
        }

        if(fat < 0){
            return 'fat';
        }

        if(flavour < 0){
            return 'flavour';
        }
    }

    function report(){
        let {protein, carb, fat, flavour} = microelements;
        return `protein=${protein} carbohydrate=${carb} fat=${fat} flavour=${flavour}`; 
    }

    return function(){
        let command = args.split(' ')[0];
        switch(command){
            case 'restock':
                let [microelement, quantity] = args.split(' ').slice(1);
                quantity = Number(quantity);
                console.log(restock(microelement, quantity));
                break;
            case 'prepare':
                let [recipe, counts] = args.split(' ').slice(1);
                counts = Number(counts);
                console.log(prepare(recipe, counts));
                break;
            case 'report':
                console.log(report());
                break;
        }
    }
})();

let manager = solution();
manager('restock protein 100');
manager('restock carbohydrate 100');
manager('restock fat 100');
manager('restock flavour 100');
