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
  const domainPartsCounter = {};
  const reverseDomains = domains.map((item) => item.split('.').reverse().map((elem) => `.${elem}`));

  for (let n = 0; n < reverseDomains.length; n++) {
    const arr = reverseDomains[n];
    let partDomain = '';
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        partDomain = arr[i];
        if (!domainPartsCounter[partDomain]) {
          domainPartsCounter[partDomain] = 1;
        } else {
          domainPartsCounter[partDomain]++;
        }
      } else {
        partDomain += arr[i];
        if (!domainPartsCounter[partDomain]) {
          domainPartsCounter[partDomain] = 1;
        } else {
          domainPartsCounter[partDomain]++;
        }
      }
    }
  }
  return domainPartsCounter;
}

module.exports = getDNSStats;
