const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {
  let resultStr = '';
  for (let i = 0; i < repeatTimes; i++) {
    let additionString = `${additionSeparator}${addition}`.repeat(additionRepeatTimes)
    let baseStr = `${separator}${str}`
    resultStr += (baseStr + additionString.slice(additionSeparator.length))
  }
  return resultStr.slice(separator.length)
}


module.exports = {
  repeater
};
