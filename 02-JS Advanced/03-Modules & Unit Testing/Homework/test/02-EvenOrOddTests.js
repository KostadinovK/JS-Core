let { expect } = require('chai');

let isOddOrEven = require('../02-Even or Odd');

describe('Tests', () => {
    it('test with non-string type, should return undefined', () => {
        let param = 1;

        expect(isOddOrEven(param)).to.undefined;
    });

    it('test with odd string lenght, should return odd', () => {
        let string = 'asd';
        let expected = 'odd';

        let actual = isOddOrEven(string);

        expect(actual).to.equal(expected);
    });

    it('test with even string lenght, should return even', () => {
        let string = 'ad';
        let expected = 'even';

        let actual = isOddOrEven(string);

        expect(actual).to.equal(expected);
    });
});