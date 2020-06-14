/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //方法1
    //   let len = m+n;
    //   while(m>0 && n>0){
    //       nums1[--len] = nums1[m-1] > nums2[n-1] ? nums1[--m] : nums2[--n]
    //   }
    //   if(n>0) {
    //       nums1.splice(0,n,...nums2.slice(0,n))
    //   }
     //方法２
    for(let i =0;i<nums2.length;i++) nums1[m+i] = nums2[i]
    nums1.sort((a,b)=>{
        return a-b
    })

};
// @lc code=end

