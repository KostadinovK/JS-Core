let { expect } = require('chai');
let mathEnforcer = require('../04-Math Enforcer');

describe('Tests', () => {
    describe('addFive() tests', () => {
        it('tested with non-number type, should return undefined', () => {
            let num = '12';

            expect(mathEnforcer.addFive(num)).to.undefined;
        });

        it('tested with positive floating-point number, should work correctly', () => {
            let num = 2.5;
            let expected = 7.5;

            let actual = mathEnforcer.addFive(num);

            expect(actual).to.equal(expected);
        });

        it('tested with negative floating-point number, should work correctly', () => {
            let num = -2.5;
            let expected = 2.5;

            let actual = mathEnforcer.addFive(num);

            expect(actual).to.equal(expected);
        });

        it('tested with positive integer, should work correctly', () => {
            let num = 10;
            let expected = 15;

            let actual = mathEnforcer.addFive(num);

            expect(actual).to.equal(expected);
        });

        it('tested with negative integer, should work correctly', () => {
            let num = -10;
            let expected = -5;

            let actual = mathEnforcer.addFive(num);

            expect(actual).to.equal(expected);
        });
    });

    describe('substractTen() tests', () => {
        it('tested with non-number type, should return undefined', () => {
            let num = '12';

            expect(mathEnforcer.subtractTen(num)).to.undefined;
        });

        it('tested with positive floating-point number, should work correctly', () => {
            let num = 10.5;
            let expected = 0.5;

            let actual = mathEnforcer.subtractTen(num);

            expect(actual).to.equal(expected);
        });

        it('tested with negative floating-point number, should work correctly', () => {
            let num = -10.5;
            let expected = -20.5;

            let actual = mathEnforcer.subtractTen(num);

            expect(actual).to.equal(expected);
        });

        it('tested with positive integer, should work correctly', () => {
            let num = 20;
            let expected = 10;

            let actual = mathEnforcer.subtractTen(num);

            expect(actual).to.equal(expected);
        });

        it('tested with negative integer, should work correctly', () => {
            let num = -20;
            let expected = -30;

            let actual = mathEnforcer.subtractTen(num);

            expect(actual).to.equal(expected);
        });
    });

    describe('sum() tests', () => {
        it('tested with non-number type as first number, should return undefined', () => {
            let num = '12';

            expect(mathEnforcer.sum(num, 10)).to.undefined;
        });

        it('tested with non-number type as second number, should return undefined', () => {
            let num = '12';

            expect(mathEnforcer.sum(10, num)).to.undefined;
        });

        it('tested with non-number type params, should return undefined', () => {
            let num = '12';

            expect(mathEnforcer.sum(num, num)).to.undefined;
        });

        it('tested with floating-point numbers, should work correctly', () => {
            let num1 = 10.5;
            let num2 = 11.5;
            let expected = 22;

            let actual = mathEnforcer.sum(num1, num2);

            expect(actual).to.equal(expected);
        });

        it('tested with integer, should work correctly', () => {
            let num1 = 20;
            let num2 = 10;
            let expected = 30;

            let actual = mathEnforcer.sum(num1, num2);

            expect(actual).to.equal(expected);
        });
    });
});