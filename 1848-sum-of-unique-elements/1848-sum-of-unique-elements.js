/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  let unique = nums.filter(num=>nums.indexOf(num)===nums.lastIndexOf(num))
  let sum = unique.reduce((acc,val)=>acc+val,0)
  return sum
};