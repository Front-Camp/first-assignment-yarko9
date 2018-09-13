/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
  let diffBase;
  let resultArr = [];
  arr.forEach(function(el,i){
   if(i==0){
   		diffBase = base - el;
   }
   if(i>0) {
   	   if(diffBase==el){
   		resultArr.push(arr[i-1],arr[i]);
   		} else {
   			diffBase = base - el;
   		}
   	}
  });
  return resultArr;
};

export default twoSums;
