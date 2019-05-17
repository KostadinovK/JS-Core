/**
 * 
 * @param {Array} orders 
 */
function calcIncome(orders){

    let totalIncome = 0;
    for (const order of orders) {
        let args = order.split(', ');
        let price = 0;
        let change = 0;
        if(args[1] == 'coffee'){
            if(args[2] == 'caffeine'){
                price += 0.8;
            }else{
                price += 0.9;
            }

            if(args.length == 5){
                price += 0.1;
            }

           
        }else if(args[1] == 'tea'){
            price += 0.8;

            if(args.length == 4){
                price += 0.1;
            }
        }

        if(args[args.length - 1] != '0'){
            price += 0.1;
        }

        if(+args[0] > price){
            change = +args[0] - price;
        }

        if(price <= +args[0]){
            totalIncome += price;
            console.log(`You ordered ${args[1]}. Price: $${price.toFixed(2)} Change: $${change.toFixed(2)}`);
        }else{
            console.log(`Not enough money for ${args[1]}. Need $${(price - +args[0]).toFixed(2)} more.`);
        }

        
    }

    console.log(`Income Report: $${totalIncome.toFixed(2)}`);
}

calcIncome(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
calcIncome(['8.00, coffee, decaf, 4', '1.00, tea, 2']);