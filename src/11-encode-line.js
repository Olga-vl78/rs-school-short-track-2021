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
  if (str === '') {
    return '';
  }
  const arr = str.split('');
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      result.push(arr[i]);
    }
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
      result.push('-');
    }
  }
  result.pop();
  const encodeArr = [];
  const newArr = result.join('').split('-');
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length === 1) {
      encodeArr.push(newArr[i]);
    } else {
      encodeArr.push(newArr[i].length + newArr[i][0]);
    }
  }
  return encodeArr.join('');
}
module.exports = encodeLine;
