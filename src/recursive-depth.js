const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor () {
    this.counter = 0;
  }
  calculateDepth(arr) {
    this.counter = 0;
    if (!Array.isArray(arr)) {
      return this.counter
    }
    arr.forEach(elem => {
      if (Array.isArray(elem)) {
        this.counter = Math.max(this.counter, this.calculateDepth(elem))
      } 
    })
    return this.counter+1
  }
}

module.exports = {
  DepthCalculator
};
