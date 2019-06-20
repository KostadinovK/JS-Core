let { expect } = require('chai');
let sum = require('../04-Sum of Numbers');

describe('Tests', () => {
    it('should return 6 when [1, 2, 3] passed as an array', () => {
        let arr = [1, 2, 3];
        let expected = 6;

        let actual = sum(arr);

        expect(actual).to.equal(expected);
    });

    it('should return 1 when [1] passed as an array', () => {
        let arr = [1];
        let expected = 1;

        let actual = sum(arr);

        expect(actual).to.equal(expected);
    });

    it('should return 0 when empty array is passed', () => {
        let arr = [];
        let expected = 0;

        let actual = sum(arr);

        expect(actual).to.equal(expected);
    });
});
