学习笔记

一、搜索遍历：

　１.每个节点都要访问一次

　２.每个节点仅仅要访问一次

　３.访问顺序不限：
　　　
　　　深度优先：depth first search

　　　会沿着一条路径不断往下搜索直到不能再继续为止，然后再折返，开始搜索下一条侯补路径。


     广度优先： breadth first search
	 
	 从起点开始，由近及远进行广泛的搜索。因此，目标顶点离起点越近，搜索结束得就越快。



二、贪心算法是一种在每一步选择中都采取在当前状态下最好或者最优的算法。

　　贪心算法第一步：明确什么是最优解；第二步：明确什么是子问题的最优解；第三步：通过子问题的最优解能递推到最终问题的最优解


　　贪心算法与动态规划的不同在于它对每个子问题的解决方案都做出选择，不能回退。动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能。


　　贪心：当下做局部最优判断

　　回溯：能够回退

　　动态规划：最优判断+回退


　　贪心法可以解决一些最优化问题，如：求图中的最小生成树、求哈夫曼编码等。然而对于工程和生活中的问题，贪心法一般不能得到我们所要求的答案。

　　一旦一个问题可以通过贪心法来解决，那么贪心法一般是解决这个问题的最好办法。由于贪心法的高效性以及其所求得的答案比较接近最优结果，贪心法也可以用作辅助算法或者直接解决一些要求结果不特别精确的问题。

三、二分查找

　　二分查找的前提：

　　　　１.　目标函数单调性（单调递增或者递减）

　　　　２.存在上下界(bounded)

　　　　３.通够通过索引访问(index accessible)

　　二分查找是指在有序的情况下进行查找，必须采用顺序存储结构，必须按关键字大小有序排列。如果是无序的话就没法进行二分查找。