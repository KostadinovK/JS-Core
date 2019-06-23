class Kitchen{
    constructor(budget){
        this.budget = budget;
        this.productsInStock = {};
        this.menu = {};
        this.actionsHistory = [];
    }

    loadProducts(products){
        for (const product of products) {
            let [name, quantity, price] = product.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            if(price <= this.budget){
                this.budget -= price;

                if(!this.productsInStock[name]){
                    this.productsInStock[name] = 0;
                }
                this.productsInStock[name] += quantity;

                this.actionsHistory.push(`Successfully loaded ${quantity} ${name}`);
            }else{
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price){
        if(this.menu[meal]){
            return `The ${meal} is already in our menu, try something different.`;
        }

        this.menu[meal] = {neededProducts, price};

        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    }

    showTheMenu(){
        if(Object.keys(this.menu).length === 0){
            return 'Our menu is not ready yet, please come later...';
        }

        let res = '';
        for (const meal in this.menu) {
           res += `${meal} - $ ${this.menu[meal].price}\n`;
        }

        return res;
    }

    makeTheOrder(meal){
        if(!this.menu[meal]){
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        if(!this._hasNeededProductsForMeal(meal)){
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        this.budget += this.menu[meal].price;
        this._removeProductsFromStock(meal);

        return `Your order (${meal}) wil be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }

    _hasNeededProductsForMeal(meal){
        for (const product of this.menu[meal].neededProducts) {
            let [name, quantity] = product.split(' ');
            quantity = Number(quantity);

            if (!this.productsInStock[name]){
                return false;
            }

            if(this.productsInStock[name].quantity < quantity){
                return false;
            }
        }
        return true;
    }

    _removeProductsFromStock(meal){
        for (const product of this.menu[meal].neededProducts) {
            let [name, quantity] = product.split(' ');
            quantity = Number(quantity);

            this.productsInStock[name].quantity -= quantity;
        }
    }
}

let kitchen = new Kitchen (1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('Pizza'));