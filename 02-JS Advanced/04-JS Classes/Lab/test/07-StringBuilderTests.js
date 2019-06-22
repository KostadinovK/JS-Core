let { expect } = require('chai');

let StringBuilder = require('../07-String Builder');

describe('Tests', () => {

    it('should have the correct function properties', function () {
        expect(typeof(StringBuilder.prototype.append)).to.equal('function');
        expect(typeof(StringBuilder.prototype.prepend)).to.equal('function');
        expect(typeof(StringBuilder.prototype.insertAt)).to.equal('function');
        expect(typeof(StringBuilder.prototype.remove)).to.equal('function');
        expect(typeof(StringBuilder.prototype.toString)).to.equal('function');
    });

    describe('Constructor tests', () => {
        it('test with empty constructor, should initialize empty array', () => {
            let sb = new StringBuilder();
            let expected = '';

            let actual = sb.toString();

            expect(actual).to.equal(expected);
        });

        it('test with string in constructor, should initialize array', () => {
            let sb = new StringBuilder('test');
            let expected = 'test';

            let actual = sb.toString();

            expect(actual).to.equal(expected);
        });
    });

    describe('append() tests', () => {
        it('test with string, should add it to result', () => {
            let sb = new StringBuilder('hello');
            let expected = 'hello world';

            sb.append(' world');
            let actual = sb.toString();

            expect(actual).to.equal(expected);
        });

        it('test with no string, should throw error', () => {
            let sb = new StringBuilder('hello');

            expect(() => sb.append(1)).to.throw(TypeError);
        });
    });

    describe('prepend() tests', () => {
        it('test with string, should add it to front of the result', () => {
            let sb = new StringBuilder('world');
            let expected = 'hello world';

            sb.prepend('hello ');
            let actual = sb.toString();

            expect(actual).to.equal(expected);
        });

        it('test with no string, should throw error', () => {
            let sb = new StringBuilder('hello');

            expect(() => sb.prepend()).to.throw(TypeError);
        });
    });

    describe('insertAt() tests', () => {
        it('insert at 0 index, should work correctly', () => {
            let sb = new StringBuilder('t');
            let expected = 'qwt';

            sb.insertAt('qw', 0);
            let actual = sb.toString();

            expect(actual).to.equal(expected);
        });

        it('insert at middle index, should work correctly', () => {
            let sb = new StringBuilder('testo');
            let expected = 'teqsto';

            sb.insertAt('q', 2);
            let actual = sb.toString();
            
            expect(actual).to.equal(expected);
        });

        it('insert at end index, should work correctly', () => {
            let sb = new StringBuilder('testo');
            let expected = 'testqo';

            sb.insertAt('q', 4);
            let actual = sb.toString();
            
            expect(actual).to.equal(expected);
        });

        it('should work correctly with negative index', () => {
            let sb = new StringBuilder('test');
        
            sb.insertAt('s', -1);

            let expected = 'tesst';
            let actual = sb.toString();

            expect(actual).to.equal(expected);
        });

        it('test with no string, should throw error', () => {
            let sb = new StringBuilder('hello');

            expect(() => sb.indexAt(1,1)).to.throw(TypeError);
        });
    });

    describe('remove() tests', () => {
        it('remove at 0 index, should work correctly', () => {
            let sb = new StringBuilder('test');
            let expected = 'st';

            sb.remove(0, 2);
            let actual = sb.toString();

            expect(actual).to.equal(expected);
        });

        it('remove at middle index, should work correctly', () => {
            let sb = new StringBuilder('testo');
            let expected = 'te';

            sb.remove(2, 3);
            let actual = sb.toString();
            
            expect(actual).to.equal(expected);
        });

        it('remove at end index, should work correctly', () => {
            let sb = new StringBuilder('testo');
            let expected = 'test';

            sb.remove(4, 1);
            let actual = sb.toString();
            
            expect(actual).to.equal(expected);
        });
    });

    it('should work correctly when multiple functions are called', () => {
        let sb = new StringBuilder();

        sb.append('ghi');
        sb.prepend('abc');
        sb.insertAt('def', 3);
        sb.remove(3, 3);

        const expected = 'abcghi';
        const actual = sb.toString();

        expect(actual).to.equal(expected);
    });
})