const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  if(domains.length === 0) return {}
  const domainParts = {}
  domains.forEach ((el) => {
      el = el.split('.');
      let acc = '';
      for (let i = el.length - 1; i >= 0; i--){
          acc += ('.' + el[i])
          if (domainParts[acc]) {
             domainParts[acc] += 1;
          } else {
              domainParts[acc] = 1;
          }
      }
  })
  return domainParts
}

module.exports = {
  getDNSStats
};
