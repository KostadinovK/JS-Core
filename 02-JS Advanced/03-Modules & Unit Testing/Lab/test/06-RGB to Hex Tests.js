let { expect } = require('chai');

let rgbToHexColor = require('../06-RGB to Hex');

describe('rgbToHexColor(red, green, blue) returns hexadecimal color based on 3 integers', () => {
    describe('Special cases (invalid input)', () => {
      it('should return undefined for invalid red values', () => {
        const [redArr, green, blue] = [[2.5, -1, 256], 100, 100];
        redArr.forEach(red => expect(rgbToHexColor(red, green, blue)).to.undefined);
      });
  
      it('should return undefined for invalid green values', () => {
        const [red, greenArr, blue] = [100, [2.5, -1, 256], 100];
        greenArr.forEach(green =>
            expect(rgbToHexColor(red, green, blue)).to.undefined
        );
      });
  
      it('should return undefined for invalid blue values', () => {
        const [red, green, blueArr] = [100, 100, [2.5, -1, 256]];
        blueArr.forEach(blue =>
            expect(rgbToHexColor(red, green, blue)).to.undefined
        );
      });
    });
  
    describe('Normal cases (valid input)', () => {
      it('should return valid hexadecimal color when all input integers are valid and in range 0-255', () => {
        const validColors = [[0, 0, 0], [255, 255, 255], [255, 158, 170]];
        const expected = ['#000000', '#FFFFFF', '#FF9EAA'];
        validColors.forEach(([red, green, blue], i) => {
          expect(rgbToHexColor(red, green, blue)).to.equal(expected[i]);
        });
      });
    });
  });