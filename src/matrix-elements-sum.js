const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let counter = 0;
  if(matrix[matrix.length-1].includes(0) || matrix[matrix.length-2].includes(0)){
      for (let i = matrix.length - 2; i >= 0; i--){
          matrix[i].forEach((el) => {
              counter += el;
          })
      }
  } else {
      for (let i = matrix.length - 1; i >= 0; i--){
          matrix[i].forEach((el) => {
              counter += el;
          })
      } 
  }
  return counter 
}


module.exports = {
  getMatrixElementsSum
};
