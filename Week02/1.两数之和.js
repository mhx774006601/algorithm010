/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length < 2) {
        return false
    }
    
    let temp = []
    for ( let i = 0;i<nums.length;i++){
        let dif = target - nums[i]
        if (temp[dif] !== undefined){
            return [temp[dif],i]
        }
        temp[nums[i]] = i;
    }
};
// @lc code=end

