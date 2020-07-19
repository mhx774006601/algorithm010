/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let n = nums.length
    let dp = Array.apply(null,Array(n+2)).map(t => Array(n+2).fill(0))
    nums = [1,...nums,1]
    for (let i = n -1 ;i>=0;i--) {
        for (let j = i+1;j<n+2;j++) {
            for (let k = i+1;k<j;k++) {
                let temp = dp[i][k] + dp[k][j] + nums[i] * nums[k] * nums[j]
                dp[i][j] = Math.max(dp[i][j],temp)
            }
        }
    }
    return dp[0][n+1]
};
// @lc code=end

