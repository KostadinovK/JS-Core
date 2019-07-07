const { expect } = require('chai');
const PizzUni = require('../02. PizzUni');

describe('Tests', () => {
    describe('Constructor Tests', () => {
        it('check if all params are valid', () => {
            let pizzUni = new PizzUni();
            let expected = [];
            let obj = {
                pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                drinks: ['Coca-Cola', 'Fanta', 'Water']
            };

            let registeredUsers = pizzUni.registeredUsers;
            let orders = pizzUni.orders;
            let availableProducts = pizzUni.availableProducts;

            expect(registeredUsers).to.be.eql(expected);
            expect(availableProducts).to.be.eql(obj);
            expect(orders).to.be.eql(expected);
        });
    });

    describe('registerUser tests', () => {
        it('register with already registered email, should throw Error', () => {
            let p = new PizzUni();

            p.registerUser('test@test.com');

            expect(() => p.registerUser('test@test.com')).to.throw(Error);
            expect(p.registeredUsers.length).to.equal(1);
        });

        it('register with new email, should add to registered users', () => {
            let p = new PizzUni();

            p.registerUser('test@test.com');

            expect(p.registeredUsers.length).to.equal(1);
        });

        it('register with new email, should add user', () => {
            let p = new PizzUni();

            p.registerUser('test@test.com');

            expect(p.registeredUsers).to.eql([{email: 'test@test.com', orderHistory: []}]);
        });

        
        it('register with new email, should return user', () => {
            let p = new PizzUni();

            let expected = {email: 'test@test.com', orderHistory: []};
            let actual = p.registerUser('test@test.com');

            expect(actual).to.eql(expected);
        });
    });

    describe('makeAnOrder tests', () => {
        it('makeOrder with not registered email, should throw Error', () => {
            let p = new PizzUni();

            let email = 'test@test.com';

            expect(() => p.makeAnOrder(email, 'Italian Style', 'Coca-Cola')).to.throw(Error);
        });

        it('makeOrder with no Pizza, should throw Error', () => {
            let p = new PizzUni();

            let email = 'test@test.com';

            expect(() => p.makeAnOrder(email, 'Coca-Cola')).to.throw(Error);
        });

        it('makeOrder with invalid Pizza, should throw Error', () => {
            let p = new PizzUni();

            let email = 'test@test.com';

            expect(() => p.makeAnOrder(email, 'Italian test Style', 'Coca-Cola')).to.throw(Error);
        });

        it('makeOrder with no Drink, should work correctly', () => {
            let p = new PizzUni();

            let email = 'test@test.com';
            p.registerUser(email);
            let orderedPizza = 'Italian Style';
            let index = p.makeAnOrder(email, orderedPizza);
            let order = p.orders[index];
            
            let userOrder = {
                orderedPizza
            };

            let expected = {
                ...userOrder,
                email,
                status: 'pending'
            };

            expect(order).to.eql(expected);
        });

        it('makeOrder with invalid Drink, should not add drink to order', () => {
            let p = new PizzUni();

            let email = 'test@test.com';
            p.registerUser(email);
            let orderedPizza = 'Italian Style';
            let index = p.makeAnOrder(email, orderedPizza, 'test');
            let order = p.orders[index];
            
            let userOrder = {
                orderedPizza
            };

            let expected = {
                ...userOrder,
                email,
                status: 'pending'
            };

            expect(order).to.eql(expected);
        });

        it('makeOrder with valid data, should add order', () => {
            let p = new PizzUni();

            let email = 'test@test.com';
            p.registerUser(email);

            p.makeAnOrder(email, 'Italian Style', 'Coca-Cola')

            expect(p.orders.length).to.eql(1);
        });

        it('makeOrder with valid data, should add order with valid email', () => {
            let p = new PizzUni();

            let email = 'test@test.com';
            p.registerUser(email);

            let index = p.makeAnOrder(email, 'Italian Style', 'Coca-Cola')
            
            expect(p.orders[index].email).to.eql(email);
        });

        it('makeOrder with valid data, should add order with valid status', () => {
            let p = new PizzUni();

            let email = 'test@test.com';
            p.registerUser(email);

            let index = p.makeAnOrder(email, 'Italian Style', 'Coca-Cola')
            
            expect(p.orders[index].status).to.eql('pending');
        });

        it('makeOrder with valid pizza and drink, should add to user orderHistory', () => {
            let p = new PizzUni();

            let email = 'test@test.com';
            let orderedPizza = 'Italian Style';
            let orderedDrink = 'Coca-Cola';

            p.registerUser(email);

            let index = p.makeAnOrder(email, orderedPizza, orderedDrink);

            let expected = {
                email,
                orderHistory: []
            };

            expected.orderHistory.push({
                orderedPizza,
                orderedDrink
            });

            expect(p.registeredUsers[0]).to.be.eql(expected);
        });

        it('makeOrder with valid pizza, should add to user orderHistory', () => {
            let p = new PizzUni();

            let email = 'test@test.com';
            let orderedPizza = 'Italian Style';
            let orderedDrink = 'Coca-Cdddola';

            p.registerUser(email);

            let index = p.makeAnOrder(email, orderedPizza, orderedDrink);

            let expected = {
                email,
                orderHistory: []
            };

            expected.orderHistory.push({
                orderedPizza
            });

            expect(p.registeredUsers[0]).to.be.eql(expected);
        });

        it('makeOrder with valid data, should add order with valid data', () => {
            let p = new PizzUni();

            let email = 'test@test.com';
            let orderedPizza = 'Italian Style';
            let orderedDrink = 'Coca-Cola';

            p.registerUser(email);

            let index = p.makeAnOrder(email, orderedPizza, orderedDrink);

            let userOrder = {
                orderedPizza,
                orderedDrink
            };

            let expected = {
                ...userOrder,
                email,
                status: 'pending'
            };
            
            expect(p.orders[index]).to.eql(expected);
        });

        it('makeOrder with valid data, should return index', () => {
            let p = new PizzUni();

            let email = 'test@test.com';
            p.registerUser(email);

            let res = p.makeAnOrder(email, 'Italian Style', 'Coca-Cola');

            expect(res).to.eql(0);
        });
    });
    describe('completeOrder() tests', () => {
        it('should change status of order', () => {
            let p = new PizzUni();

            let email = 'test@test.com';
            p.registerUser(email);

            let index = p.makeAnOrder(email, 'Italian Style', 'Coca-Cola');

            p.completeOrder();

            expect(p.orders[index].status).to.be.eql('completed');
        });

        it('should return order', () => {
            let p = new PizzUni();

            let email = 'test@test.com';
            p.registerUser(email);

            let index = p.makeAnOrder(email, 'Italian Style', 'Coca-Cola');

            let order = p.completeOrder();
            let expected = p.orders[index];
            expected.status = 'completed';

            expect(order).to.be.eql(expected);
        });
    });
    describe('doesTheUserExist() tests', () => {
        it('tests with not existing email, should return undefined', () => {
            let p = new PizzUni();

            expect(p.doesTheUserExist('test@test.com')).to.be.undefined;
        });

        it('tests with existing email, should return user', () => {
            let p = new PizzUni();

            let email = 'test@test.com';
            p.registerUser(email);

            let expected = {email, orderHistory: []};
            expect(p.doesTheUserExist(email)).to.eql(expected);
        });
    });

    describe('detailsAboutMyOrder() tests', () => {
        it('tests with existing pending order, should return pending status', () => {
            let p = new PizzUni();

            let email = 'test@test.com';
            p.registerUser(email);

            let res = p.makeAnOrder(email, 'Italian Style', 'Coca-Cola');


            expect(p.detailsAboutMyOrder(res)).to.be.eql('Status of your order: pending');
        });

        it('tests with existing completed order, should return completed status', () => {
            let p = new PizzUni();

            let email = 'test@test.com';
            p.registerUser(email);

            let res = p.makeAnOrder(email, 'Italian Style', 'Coca-Cola');
            p.completeOrder();

            expect(p.detailsAboutMyOrder(res)).to.be.eql('Status of your order: completed');
        });
    });
});