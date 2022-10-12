const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  const acc = [];
  const strN = String(n);
  for (let i = 0; i < strN.length; i++){
    let tmp = String(n).split('')
    tmp.splice(i,1)
    acc.push(Number(tmp.join('')))
  }
  return(acc.sort((a,b) => a - b).pop());
}


module.exports = {
  deleteDigit
};
