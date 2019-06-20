let { expect } = require('chai');

let createCalculator = require('../07-Add and Subtract');

describe('Tests', () => {
    describe('get method tests', () => {
        it('should return value correctly', () => {
            let calc = createCalculator();

            expect(calc.get()).to.equal(0);
        });
    });

    describe('add method tests', () => {
        it('should return NaN when second number is not passed', () =>{
            let calc = createCalculator();

            calc.add();
            let actual = calc.get();
            
            expect(actual).to.NaN;
        });

        it('should add correctly when second number is string', () =>{
            let calc = createCalculator();
            let expected = 2;

            calc.add('2');
            let actual = calc.get();
            
            expect(actual).to.equal(expected);
        });

        it('should add correctly when second number is integer', () =>{
            let calc = createCalculator();
            let expected = 2;

            calc.add(2);
            let actual = calc.get();
            
            expect(actual).to.equal(expected);
        });

        it('should add correctly when second number is double', () =>{
            let calc = createCalculator();
            let expected = 2.5;

            calc.add(2.5);
            let actual = calc.get();
            
            expect(actual).to.equal(expected);
        });
    });

    describe('subtract method tests', () => {
        it('should return NaN when second number is not passed', () =>{
            let calc = createCalculator();

            calc.subtract();
            let actual = calc.get();
            
            expect(actual).to.NaN;
        });

        it('should subtract correctly when second number is string', () =>{
            let calc = createCalculator();
            let expected = 1;

            calc.add(2);
            calc.subtract('1');
            let actual = calc.get();
            
            expect(actual).to.equal(expected);
        });

        it('should subtract correctly when second number is integer', () =>{
            let calc = createCalculator();
            let expected = 1;

            calc.add(2);
            calc.subtract(1);
            let actual = calc.get();
            
            expect(actual).to.equal(expected);
        });

        it('should subtract correctly when second number is double', () =>{
            let calc = createCalculator();
            let expected = 0.5;

            calc.add(2);
            calc.subtract(1.5);
            let actual = calc.get();
            
            expect(actual).to.equal(expected);
        });
    });
});