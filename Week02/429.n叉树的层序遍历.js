/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
   if (!root) return [];
   const levels = [];
   const queue = [root];
   while (queue.length) {
       const temp = [];
       let count = queue.length;
       while (count--) {
           const node  = queue.shift();
           temp.push(node.val)
           for (let i=0;i<node.children.length;i++) {
               queue.push(node.children[i])
           }
       }
       levels.push(temp.slice())
   }
   return levels
};
// @lc code=end

