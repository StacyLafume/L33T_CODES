// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
//find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2

// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = nums =>{
    // sort nums least to greatest
    nums.sort((a,b) => a-b);
    // value that nums element should be
    let target = 0
    // loop through each value in nums 
    for (let i = 0; i<nums.length; i++){
        // if target is not nums element return target 
        if (target != nums[i] ) return target;
            // incremeant target
            target++
    }
    // if target is equal to 0 increase target by one 
    if (target === 0){
        target++
    }  
    // retun target
    return target
};