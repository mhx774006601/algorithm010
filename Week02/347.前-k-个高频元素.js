/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //...new Set(nums)  对数据去重
    let maps = new Map(),numss = [...new Set(nums)]
    nums.map((num) =>{
        if (maps.has(num)) {
            maps.set(num,maps.get(num)+1)
        } else {
            maps.set(num,1)
        }
    })
    return numss.sort((a,b) => maps.get(b) - maps.get(a)).slice(0,k)
};
// @lc code=end

