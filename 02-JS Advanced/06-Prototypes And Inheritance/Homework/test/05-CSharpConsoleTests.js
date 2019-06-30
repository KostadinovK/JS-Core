const Console = require('../05-C# Console');

const { expect } = require('chai');

describe('Tests', () => {
    it('test writeLine() with object, should return JSON', () => {
        let obj = {name: 'Test', lastName: 'Testov', age: 22};
        let expected = JSON.stringify(obj);

        let actual = Console.writeLine(obj);

        expect(actual).to.be.equal(expected);
    });

    it('test writeLine() with string, should return same string', () => {
        let str = 'hello';
        let expected = str;

        let actual = Console.writeLine(str);

        expect(actual).to.be.equal(expected);
    });

    it('test writeLine() with multiple params and first not being string, should throw TypeError', () => {
        expect(() => Console.writeLine(22, 22, 22)).to.throw(TypeError);
    });

    it('test writeLine() with more placeholders than params, should throw RangeError', () => {
        expect(() => Console.writeLine('hello {0} {1}', 'Kosta')).to.throw(RangeError);
    });

    it('test writeLine() with more params than placeholders, should throw RangeError', () => {
        expect(() => Console.writeLine('hello {0} {1}', 'Kosta', 22, 'test')).to.throw(RangeError);
    });

    it('test writeLine() with invalid placeholder index, should throw RangeError', () => {
        expect(() => Console.writeLine('hello {0} {12}', 's', 's')).to.throw(RangeError);
    });

    it('test writeLine() with correct placeholders and params, should work correctly', () => {
        let str = 'Hello {0}. I am 18 years old, from {1}';
        let expected = 'Hello Kosta. I am 18 years old, from Sofia';

        let actual = Console.writeLine(str, 'Kosta', 'Sofia');
        expect(actual).to.be.equal(expected);
    });
});