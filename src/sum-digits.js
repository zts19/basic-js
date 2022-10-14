const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  let result = 0;
  let arr = n.toString().split('');

  const summation = arr => {
   if (arr.length === 1 && +arr[0] < 10) {
       result = +arr[0];
       return;
      } else {
       arr = arr.join('').split('')
       let tempResult = 0;
       let tempArr = [];
       arr.forEach((el) => {
           tempResult += +el
       })
       tempArr.push(tempResult);
       summation(tempArr)
      }
  }

  summation(arr)
  return result
 }

module.exports = {
  getSumOfDigits
};
