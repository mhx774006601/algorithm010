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
    //１.　暴力法
    // if (nums.length <2) return -1;
    // for (let i=0;i<nums.length;i++){
    //     for(let j=0;j<nums.length;j++){
    //         if(nums[i]+nums[j] == target){
    //             return [i,j]
    //         }
    //     }
    // }
    // return -1

    // 2. 使用哈希表
    let temp = []
    for (let i=0;i<nums.length;i++){
        let two = target - nums[i]
        if (temp[two] != undefined) {
            return [temp[two],i]
        }
        temp[nums[i]] = i
    }
};
// @lc code=end

