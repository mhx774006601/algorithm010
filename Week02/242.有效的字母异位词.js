/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 1.
    if (s.length != t.length) {
        return false
    }
    let str1 = s.split('').sort().join('');
    let str2 = t.split('').sort().join('');
    
    return str1 === str2;

    //2.
    if (s.length != t.length) {
        return false
    }
    for (const item of s) {
        if (t.indexOf(item) != -1){
            t = t.replace(item,'')
        }
    }
    return t === ''
};
// @lc code=end

