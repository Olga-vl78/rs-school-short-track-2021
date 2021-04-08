/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexesArr = [];
  const numArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indexesArr.push(i);
    } else {
      numArr.push(arr[i]);
    }
  }
  const sortedNumArr = numArr.sort((a, b) => a - b);
  for (let i = 0; i < indexesArr.length; i++) {
    sortedNumArr.splice(indexesArr[i], 0, -1);
  } return (sortedNumArr);
}

module.exports = sortByHeight;
