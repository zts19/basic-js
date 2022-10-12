const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !(Number(sampleActivity)) || (sampleActivity > 15 || sampleActivity <= 0)) {
    return false;
  } else {
    let yearsCount = Math.ceil((Math.log(+MODERN_ACTIVITY / +sampleActivity)) / (Math.log(2) / HALF_LIFE_PERIOD))
    return yearsCount
  }
}

module.exports = {
  dateSample
};
