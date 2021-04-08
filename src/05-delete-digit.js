/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numArr = n.toString().split('');
  const minNum = Math.min(...numArr);
  const indexMinNum = numArr.indexOf(minNum.toString());
  numArr.splice(indexMinNum, 1);
  return +numArr.join('');
}
module.exports = deleteDigit;
