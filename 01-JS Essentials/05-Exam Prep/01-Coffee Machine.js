function coffeeMachine(orders){
    
    let totalIncomes = 0;
    
    for (const order of orders) {
        let price = 0.8;

        let [coin, beverage] = order.split(', ');
        
        if(order.includes('decaf')){
            price += 0.1;
        }

        if(order.includes('milk')){
            price += 0.1;
        }

        if(Number(order.split(', ').pop()) > 0){
            price += 0.1;
        }

        if(coin >= price){
            console.log(`You ordered ${beverage}. Price: ${price.toFixed(2)}$ Change: ${(coin - price).toFixed(2)}$`);
            totalIncomes += price;
        }else{
            console.log(`Not enough money for ${beverage}. Need ${(price - coin).toFixed(2)}$ more.`);
        }
    }

    console.log(`Income Report: ${totalIncomes.toFixed(2)}$`);
}

coffeeMachine(['1.00, coffee, caffeine, milk, 4',
                '0.40, tea, milk, 2',
                '1.00, coffee, decaf, 0']);