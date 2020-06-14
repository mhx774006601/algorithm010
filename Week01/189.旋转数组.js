/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 //1. 暴力法,时间复杂度O(n*k),空间复杂度O(1)
// var rotate = function(nums, k) {
//     let n = nums.length;
//     let nEnd = 0;
//     let nPrev = 0;

//     for (let i = 0;i<k;i++) {
//         nEnd = nums[n-1]
//         for (let j = 0;j<n;j++) {
//             nPrev = nums[j];
//             nums[j] = nEnd;
//             nEnd = nPrev;
//         }
//     }
// };

// 2. 利用删除后边的元素，插入前边
var rotate = function(nums, k) {
    for (let i=0;i<k;i++){
        nums.unshift(nums.pop())
    }
};


// @lc code=end

