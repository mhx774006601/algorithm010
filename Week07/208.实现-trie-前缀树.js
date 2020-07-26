/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new TrieNode();
};

function TrieNode() { 
    this.next = new Map();
    this.isEnd = false;
 }

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if (!word) return ;
    var node  = this.root;
    for (let i = 0;i<word.length;i++) {
        if (!node.next.has(word[i])) {
            node.next.set(word[i],new TrieNode());
        }
        node  = node.next.get(word[i])
    }
    node.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if (!word) return false;
    var node  = this.root;
    for (let i=0;i<word.length;i++) {
        if (!node.next.has(word[i])) {
            return false
        }
        node = node.next.get(word[i])
    }
    return node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    if (!prefix) return true;
    var node = this.root;
    for (let i = 0;i<prefix.length;i++) {
        if (! node.next.has(prefix[i])) {
            return false;
        }
        node = node.next.get(prefix[i])
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

