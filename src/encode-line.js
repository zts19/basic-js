const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let resStr = ''
  let counter = 1;
  for (let i = 0; i < str.length; i++){
      while (str[i] === str[i + 1]){
          counter += 1; 
          i++ 
      }
      resStr += `${counter === 1 ? '' : counter}${str[i]}`
      counter = 1;
  }
  return resStr
}

module.exports = {
  encodeLine
};
