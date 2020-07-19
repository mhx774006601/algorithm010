/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// var minPathSum = function(grid) {
//     let dp = new Array(grid.length);
//     for (let i = 0;i<grid.length;i++) {
//         for (let j = 0;j<grid[0].length;j++){
//             if(i != 0 && j != 0) {
//                 dp[j] = Math.min(dp[j - 1],dp[j]) + grid[i][j];
//             } else if(i == 0 && j != 0) {
//                 dp[j] = dp[j -1] + grid[i][j];
//             } else if(i != 0 && j == 0) {
//                 dp[j] = dp[j] + grid[i][j];
//             } else if(i == 0 && j == 0) {
//                 dp[j] = grid[i][j]
//             }
//         }
//     }
//     return dp[grid[0].length - 1];
// };

// 2 自下至上的动态规划
var minPathSum = function (grid) { 
    const m = grid.length,
          n = grid[0].length;
    for (let i = m-1;i >= 0;i--) {
        for (let j = n -1;j>=0;j--) {
            if (i+1 < m && j + 1 < n) {
                grid[i][j] += Math.min(grid[i+1][j],grid[i][j+1]);
            } else if (i+1 < m) {
                grid[i][j] += grid[i+1][j];
            } else if (j+1 < n) {
                grid[i][j] += grid[i][j+1];
            }
        }
    }
    return grid[0][0];
 }
// @lc code=end

