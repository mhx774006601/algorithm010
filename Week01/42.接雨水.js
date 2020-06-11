/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
//1.暴力法
// var trap = function(height) {
//      let total = 0;
//      height.forEach((item,index)=>{
//          let leftMax = 0,rightMax = 0;
//          for(let i =0 ;i<=index;i++){
//              leftMax = Math.max(height[i],leftMax)
//          }
//          for(let i = index;i<height.length;i++){
//              rightMax = Math.max(height[i],rightMax)
//          }
//          total += Math.min(leftMax,rightMax) - item

//      })
//      return total
// };

// //2.动态编程－用数组记录从左向右和从右向左的最大可能储水量。
// var trap = function(height) {
//     let size = height.length;
//     let total = 0;
//     let leftArr = [height[0]];
//     let rightArr = [height[size - 1]];
//     for(let i=1;i<size;i++){
//         leftArr.push(Math.max(height[i],leftArr[i - 1]));
//         rightArr.push(Math.max(height[size-1-i],rightArr[i-1]))
//     }
//     for(let i = 0;i<size;i++){
//         total += Math.min(leftArr[i],rightArr[size-1-i])-height[i]
//     }
//     return total;
// };

//3.　栈
// var trap = function(height) {
//     let stack = [], current = 0, total = 0;
//     while (current < height.length) {
//         while (stack.length && height[current] > height[stack[stack.length - 1]]) {
//             let top = stack[stack.length - 1]
//             stack.pop();
//             if (!stack.length) break;
//             let width = current - stack[stack.length - 1] - 1;
//             let ht = Math.min(height[current], height[stack[stack.length - 1]]) - height[top];
//             total += width * ht;
//         }
//         stack.push(current++);
//     }
//     return total;
// };

//4. 双指针
var trap = function(height) {
    let left = 0,right = height.length - 1, left_max =0, right_max = 0, total = 0;
    while (left < right ) {
        if(height[left] < height[right]) {
            height[left] < left_max ? total += left_max - height[left] : left_max = height[left];
            left++
        } else {
            height[right] < right_max ? total += right_max - height[right]: right_max = height[right];
            right--
        }
    }
    return total;
};

// @lc code=end

