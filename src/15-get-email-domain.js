/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const regexp = /@\b[a-z][a-z0-9-]+.[a-z]+/;
  const domain = email.match(regexp).join('').slice(1);
  return domain;
}
module.exports = getEmailDomain;
