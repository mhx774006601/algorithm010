/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash = {};
    let result = [];
    for (let i = 0;i<s.length;i++) {
        if (!hash[s[i]]) {
            hash[s[i]] = 1
        } else {
            hash[s[i]]++;
        }
    }
    for (let j = 0;j<s.length;j++) {
        if (hash[s[j]] == 1) {
            return j;
        }
    }
    return -1;
};
// @lc code=end

