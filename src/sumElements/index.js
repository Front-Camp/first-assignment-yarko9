/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
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
   		resultArr.push(arr[i],arr[i-1]);
   		}
   		else {
   			diffBase = base - el;
   		}
   	}
  });
  return resultArr;
};

export default sumElements;
