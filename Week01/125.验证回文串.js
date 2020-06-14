/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   s = s.replace(/[^0-9a-zA-Z]/g,'').toLowerCase();
   let n = s.length;
   let left = 0;
   let right = n-1
   while (left < right) {
      if (s[left] != s[right]){
         return false
      }
      left++
      right--
   }
   return true

};
// @lc code=end

