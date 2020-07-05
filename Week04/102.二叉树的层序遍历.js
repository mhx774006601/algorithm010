/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    //存放所有节点
    const items = [];
    const queue = [root,null];
    //存放每一层的节点
    let levelNodes = [];

    while (queue.length > 0) {
        const t = queue.shift();
        if(t) {
            levelNodes.push(t.val)
            if (t.left) {
                queue.push(t.left);
            }
            if (t.right) {
                queue.push(t.right);
            }
        } else {
            items.push(levelNodes);
            levelNodes = [];
            if(queue.length > 0) {
                queue.push(null)
            }
        }
    }
    return items;
};
// @lc code=end

