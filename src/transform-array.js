const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) { return "'arr' parameter must be an instance of the Array!"}
  if (arr.length == 0) { return []}
  const transformedArr = Array.from(arr)
  transformedArr.forEach((el,ind) => {
    if (el === '--discard-next') {
      if (ind != transformedArr.length-1) {
        transformedArr.splice(ind ,2)
      } else (transformedArr.splice(ind,1))
    }
    if (el === '--discard-prev') {
      if (ind != 0) {
        transformedArr.splice(ind-1,2)
      } else (transformedArr.splice(ind,1))
    }
    if (el === '--double-next') {
      if (ind != transformedArr.length-1) {
        transformedArr.splice(ind, 1, transformedArr[ind+1])
      } else (transformedArr.splice(ind, 1))
    }
    if (el === '--double-prev') {
      if (ind != 0) {
        transformedArr.splice(ind, 1, transformedArr[ind-1])
      } else (transformedArr.splice(ind,1))
    }
  })
  transformedArr.forEach((el, ind) => {
    if (ind !==0 && ind !==transformedArr.length-1 && (el === '--double-prev' || el === '--discard-prev')) {
      transformedArr.splice(ind, 1)
    }
  })
  return transformedArr
}


module.exports = {
  transform
};
