let { expect } = require('chai');
let lookupChar = require('../03-Char Lookup');

describe('Tests', () => {
    it('test with a non-string type as first param, should return undefined', () => {
        let param = 1;
        expect(lookupChar(param, 2)).to.undefined;
    });

    it('test with a non-number type as second param, should return undefined', () => {
        let param = '2';
        expect(lookupChar('test', param)).to.undefined;
    });

    it('test with floating-point index, should return undefined', () => {
        let param = 1.2;
        expect(lookupChar('test', param)).to.undefined;
    });

    it('test with index greater than string.length, should return Incorrect index', () => {
        let string = 'test';
        let index = 10;
        let expected = 'Incorrect index';

        let actual = lookupChar(string, index);

        expect(actual).to.equal(expected);
    });

    it('test with negative index, should return Incorrect index', () => {
        let string = 'test';
        let index = -1;
        let expected = 'Incorrect index';

        let actual = lookupChar(string, index);

        expect(actual).to.equal(expected);
    });

    it('test correctly, should work correctly', () => {
        let string = 'test';
        let index = 2;
        let expected = 's';

        let actual = lookupChar(string, index);

        expect(actual).to.equal(expected);
    });
});