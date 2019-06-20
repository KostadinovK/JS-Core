let { expect } = require('chai');

let isSymmetric = require('../05-Check For Symmetry');

describe('Tests', () => {
    it('Should return false when a number is passed', () => {
        expect(isSymmetric(1)).to.false;
    });

    it('Should return false when a string is passed', () => {
        expect(isSymmetric('hello')).to.false;
    });

    it('Should return false when nothing is passed', () =>{
        expect(isSymmetric()).to.false;
    });

    it('Should return true when empty array is passed', () =>{
        let arr = [];

        expect(isSymmetric(arr)).to.true;
    });

    it('Should return false if input is object', function () {
        expect(isSymmetric({})).to.false;
    });

    it('Should return false if array is from different types', function () {
        let arr = ['a', 1, {}, 'a'];

        expect(isSymmetric(arr)).to.false;
    });

    it('Should return true when a symmetric array is passed', () =>{
        let arr = ['a', 'b', 'b', 'a'];

        expect(isSymmetric(arr)).to.true;
    });

    it('Should return false when a non-symmetric array is passed', () => {
        let arr = ['a', 'c', 'b', 'a'];

        expect(isSymmetric(arr)).to.false;
    });

    it('Should return true for an array of different data types that is symetrical', () => {
        let arr = [[], 5, 'str', {}, true, {}, 'str', 5, []];
        
        expect(isSymmetric(arr)).to.true;
      });
});