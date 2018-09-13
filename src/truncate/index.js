/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length, replacer) => {
	let res = str.substr(0, 2);
	res+= replacer;
	return res;
};
/*truncate('My name is Yaroslav', 10, '...'); */

export default truncate;
