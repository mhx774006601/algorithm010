/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 // 1 前序，中序，后序通用方法
var preorderTraversal = function(root) {
    if (root) {
        return [root.val,...preorderTraversal(root.left),...preorderTraversal(root.right)]
    } else {
        return []
    }

};

// 2　递归

var preorderTraversal = function(root) {
    let res = []
    let preNode = (node) => {
        if (node) {
            res.push(node.val)
            preNode(node.left)
            preNode(node.right)
        }
    }
    preNode(root)
    return res
};

//3. 迭代
var preorderTraversal = function(root) {
    let list = []
    let stack = []
    if (root) stack.push(root)
    while (stack.length > 0) {
        const curNode = stack.pop()
        list.push(curNode.val)

        if (curNode.right !== null) {
            stack.push(curNode.right)
        }
        if (curNode.left !== null) {
            stack.push(curNode.left)
        }
    }
    return list
};
// @lc code=end

