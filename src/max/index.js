/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  let maxNum;
  arr.forEach(function(el,i) {
  	if(i==0) {
  		maxNum = el;
  	}
  	if(el>maxNum) {
  		maxNum = el;
  	}
  });
  return maxNum;
};

export default max;
