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
  const arr = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        arr.push(matrix[i][j]);
      } else if (i > 0 && matrix[i - 1][j] !== 0) {
        arr.push(matrix[i][j]);
      }
    }
  }
  return arr.reduce((acc, curr) => acc + curr);
}

module.exports = getMatrixElementsSum;
