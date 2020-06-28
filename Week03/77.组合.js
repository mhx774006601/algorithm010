/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

 //　
var combine = function(n, k) {
    let result = [];
    var subresult = [];
    for (let i=0;i<k;i++) {
        subresult[i] = 0;
    }
    if (n<k) {
        return result;
    }

    let i = 0;
    while (i>=0) {
        subresult[i]++;
        if(subresult[i] > n) {
            i--;
        } else if (i == k-1) {
            result.push(subresult.slice(0))
        } else {
            ++i;
            subresult[i] = subresult[i-1]            
        }
    }
    return result;
};
// @lc code=end

