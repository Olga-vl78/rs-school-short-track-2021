/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const n = s2.length;
  const a = s1.split('');
  const b = s2.split('');
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) !== -1) {
      b.splice(b.indexOf(a[i]), 1);
    }
  }
  return (n - b.length);
}

module.exports = getCommonCharacterCount;
