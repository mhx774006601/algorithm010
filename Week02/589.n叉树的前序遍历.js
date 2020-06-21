/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */


 // 1
var preorder = function(root) {
    if (!root) return [];

    let temp = [];
    inOrder(root)
    return temp

    function inOrder(root) {
        if (!root ) return;
        temp.push(root.val)
        for (let i = 0;i<root.children.length;i++){
            inOrder(root.children[i])
        }
    }
};

// 2.
// var preorder = function(root) {
    // let result = [],current = root;
    // while (current) {
    //     result.push(current.val);
    //     let temp = current.children;
    //     if(!temp.length) return result;
    //     current = current.children.shift();
    //     let next = current;
    //     while (next.children.length) {
    //         next = next.children[next.children.length - 1]
    //     }
    //     next.children = temp;
    // }
    // return result;
// };
// @lc code=end

