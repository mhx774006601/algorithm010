/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 1. 递归 时间复杂度O(n+m) 空间复杂度O(n+m),n,m分别为l1,l2链表的长度
    // if (l1 === null) {
    //     return l2
    // } else if (l2 === null) {
    //     return l1
    // } else if (l1.val<l2.val) {
    //     l1.next = mergeTwoLists(l1.next,l2)
    //     return l1
    // } else {
    //     l2.next = mergeTwoLists(l1,l2.next)
    //     return l2
    // }

    // 2. 
    //创建一个空的链表
    let newList = new ListNode();
    //创建一个头
    let head = newList;

    while (l1 !== null && l2 !== null) {
        //判断链表中的最小值，从最小值开始连接
        if (l1.val < l2.val) {
            newList.next = l1
            l1 = l1.next
        } else {
            newList.next = l2
            l2 = l2.next
        }
        newList = newList.next
    }

    //如果链表有剩余
    if (l1 !== null) {
        newList.next = l1
    }
    if (l2 !== null) {
        newList.next = l2
    }

    return head.next
};
// @lc code=end

