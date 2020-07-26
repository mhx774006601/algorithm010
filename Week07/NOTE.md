学习笔记


字典树（Trie树）

	又称单词查找树或键树，是一种树形结构。典型应用是用于统计和排序大量的字符串，所以经常被搜索引擎系统用于文本词频统计。

	优点：最大限度的减少无谓的字符串比较，查找效率比哈希表高。

基本性质

	结点本身不存完整单词；
	
	从根节点到某一节点，路径上经过的字符连接起来，为该节点对应的字符串；
	
	每个结点的所有子结点路径代表的字符都不相同。
	
核心思想

	Trie树的核心思想是空间换时间；
	
	利用字符串的公共前缀降低查询时间的开销以达到提高效率的目的。
	
Trie树代码模板

class Trie {
    private boolean isEnd;
    private Trie[] next;
    /** Initialize your data structure here. */
    public Trie() {
        isEnd = false;
        next = new Trie[26];
    }
    
    /** Inserts a word into the trie. */
    public void insert(String word) {
        if (word == null || word.length() == 0) return;
        Trie curr = this;
        char[] words = word.toCharArray();
        for (int i = 0;i < words.length;i++) {
            int n = words[i] - 'a';
            if (curr.next[n] == null) curr.next[n] = new Trie();
            curr = curr.next[n];
        }
        curr.isEnd = true;
    }
    
    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        Trie node = searchPrefix(word);
        return node != null && node.isEnd;
    }
    
    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        Trie node = searchPrefix(prefix);
        return node != null;
    }

    private Trie searchPrefix(String word) {
        Trie node = this;
        char[] words = word.toCharArray();
        for (int i = 0;i < words.length;i++) {
            node = node.next[words[i] - 'a'];
            if (node == null) return null;
        }
        return node;
    }
}


并查集适用场景

	组团、配对问题
	
	分组
	
基本操作

	makeSet ( s ) : 建立并查集，包含s个元素的集合

	unionSet ( x,y ) : 把元素x和元素y所在集合合并

	find (x) : 找到元素x所在集合的代表

并查集代码模板

class UnionFind {
	private int count = 0; 
	private int[] parent; 
	public UnionFind(int n) { 
		count = n; 
		parent = new int[n]; 
		for (int i = 0; i < n; i++) { 
			parent[i] = i;
		}
	} 
	public int find(int p) { 
		while (p != parent[p]) { 
			parent[p] = parent[parent[p]]; 
			p = parent[p]; 
		}
		return p; 
	}
	public void union(int p, int q) { 
		int rootP = find(p); 
		int rootQ = find(q); 
		if (rootP == rootQ) return; 
		parent[rootP] = rootQ; 
		count--;
	}
}


红黑树 & AVL树

 AVL树


	左子树高度 减去 右子树高度（有时相反）。

	Balance factor = {-1,0,1}

	通过旋转操作来进行平衡（四种）

	旋转操作

	右右子树 -> 左旋

	左左子树 -> 右旋

	左右子树 -> 左右旋

	右左子树 -> 右左旋

AVL总结

平衡二叉搜索树

	每个节点存balance factor = {-1,0,1}

	四种旋转操作

不足：节点需要存储额外信息、且调整次数频繁

红黑树 Red-black Tree

红黑树是一种近似平衡的二叉搜索树，满足任何一个节点的左右子树的高度差小于两倍。具体来说，红黑树满足如下条件：

每个节点要么是红色，要么是黑色

根结点是黑色

每个叶子结点（null结点，空节点）是黑色的

不能有相邻接的两个红色结点

从任一结点到其每个叶子的所有路径都包含相同数目的黑色结点

对比

查询：AVL树优于红黑树，因为AVL树是严格平衡的

插入 & 删除：红黑树优于AVL树，红黑树是近似平衡的

存储：红黑树优于AVL树，因为AVL树每个节点需要存储balance factor,红黑树只需要1bit存储颜色信息

红黑树大多数用在语言类库，AVL多用在读多写少，比如数据库中