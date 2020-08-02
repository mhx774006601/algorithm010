学习笔记

位运算：

符号	描述	运算规则

&	与	两个位都为1时，结果才为1

|	或	两个位都为0时，结果才为0

^	异或	两个位相同为0，相异为1

~	取反	0变1，1变0

<<	左移	各二进位全部左移若干位，高位丢弃，低位补0

>>	右移	各二进位全部右移若干位，对无符号数，高位补0，有符号数，各编译器处理方法不一样，有的补符号位（算术右移），有的补0（逻辑右移）

１.　按位与运算符（&）

定义：参加运算的两个数据，按二进制位进行“与”运算。

运算规则：

0&0=0  0&1=0  1&0=0  1&1=1

总结：两位同时为1，结果才为1，否则结果为0。

例如：3&5 即 0000 0011& 0000 0101 = 0000 0001，因此 3&5 的值得1。

注意：负数按补码形式参加按位与运算。

与运算的用途：

1）清零

如果想将一个单元清零，即使其全部二进制位为0，只要与一个各位都为零的数值相与，结果为零。

2）取一个数的指定位

比如取数 X=1010 1110 的低4位，只需要另找一个数Y，令Y的低4位为1，其余位为0，即Y=0000 1111，然后将X与Y进行按位与运算（X&Y=0000 1110）即可得到X的指定位。

3）判断奇偶

只要根据最未位是0还是1来决定，为0就是偶数，为1就是奇数。因此可以用if ((a & 1) == 0)代替if (a % 2 == 0)来判断a是不是偶数。

2. 按位或运算符（|）

定义：参加运算的两个对象，按二进制位进行“或”运算。

运算规则：

0|0=0  0|1=1  1|0=1  1|1=1

总结：参加运算的两个对象只要有一个为1，其值为1。

例如：3|5即 0000 0011| 0000 0101 = 0000 0111，因此，3|5的值得7。　

注意：负数按补码形式参加按位或运算。

或运算的用途：

1）常用来对一个数据的某些位设置为1

比如将数 X=1010 1110 的低4位设置为1，只需要另找一个数Y，令Y的低4位为1，其余位为0，即Y=0000 1111，然后将X与Y进行按位或运算（X|Y=1010 1111）即可得到。


3. 异或运算符（^）

定义：参加运算的两个数据，按二进制位进行“异或”运算。

运算规则：

0^0=0  0^1=1  1^0=1  1^1=0

总结：参加运算的两个对象，如果两个相应位相同为0，相异为1。

异或的几条性质:

1、交换律

2、结合律 (a^b)^c == a^(b^c)

3、对于任何数x，都有 x^x=0，x^0=x

4、自反性: a^b^b=a^0=a;

异或运算的用途：

1）翻转指定位

比如将数 X=1010 1110 的低4位进行翻转，只需要另找一个数Y，令Y的低4位为1，其余位为0，即Y=0000 1111，然后将X与Y进行异或运算（X^Y=1010 0001）即可得到。

2）与0相异或值不变

例如：1010 1110 ^ 0000 0000 = 1010 1110

3）交换两个数

void Swap(int &a, int &b){
    if (a != b){
        a ^= b;
        b ^= a;
        a ^= b;
    }
}

4. 取反运算符 (~)

定义：参加运算的一个数据，按二进制进行“取反”运算。

运算规则：　

~1=0

~0=1

总结：对一个二进制数按位取反，即将0变1，1变0。

异或运算的用途：

1）使一个数的最低位为零

使a的最低位为0，可以表示为：a & ~1。~1的值为 1111 1111 1111 1110，再按"与"运算，最低位一定为0。因为“ ~”运算符的优先级比算术运算符、关系运算符、逻辑运算符和其他运算符都高。

5. 左移运算符（<<）

定义：将一个运算对象的各二进制位全部左移若干位（左边的二进制位丢弃，右边补0）。

设 a=1010 1110，a = a<< 2 将a的二进制位左移2位、右补0，即得a=1011 1000。

若左移时舍弃的高位不包含1，则每左移一位，相当于该数乘以2。

6. 右移运算符（>>）

定义：将一个数的各二进制位全部右移若干位，正数左补0，负数左补1，右边丢弃。

例如：a=a>>2 将a的二进制位右移2位，左补0 或者 左补1得看被移数是正还是负。

操作数每右移一位，相当于该数除以2。

7. 复合赋值运算符

位运算符与赋值运算符结合，组成新的复合赋值运算符，它们是：

&=        例：a&=b    相当于     a=a&b

|=        例：a|=b    相当于     a=a|b

>>=      例：a>>=b   相当于     a=a>>b

<<=      例：a<<=b     相当于      a=a<<b

^=        例：a^=b    相当于   a=a^b

运算规则：和前面讲的复合赋值运算符的运算规则相似。

不同长度的数据进行位运算：如果两个不同长度的数据进行位运算时，系统会将二者按右端对齐，然后进行位运算。

以“与运算”为例说明如下：我们知道在C语言中long型占4个字节，int型占2个字节，如果一个long型数据与一个int型数据进行“与运算“，右端对齐后，左边不足的位依下面三种情况补足，

1）如果整型数据为正数，左边补16个0。

2）如果整型数据为负数，左边补16个1。

3）如果整形数据为无符号数，左边也补16个0。

如：long a=123；int b=1；计算a& b。

如：long a=123；int b=-1；计算a& b。

如：long a=123；unsigned intb=1；计算a & b。\


布隆过滤器(Bloom Filter)的原理和实现

如何判断一个元素是否存在一个集合中,在这种情况下需要布隆过滤器

哈希函数是实现哈希表和布隆过滤器的基础。

布隆过滤器介绍

　巴顿.布隆于一九七零年提出，一个很长的二进制向量 （位数组）　，一系列随机函数 (哈希)　，空间效率和查询效率高　，有一定的误判率（哈希表是精确匹配）

布隆过滤器添加元素：

	将要添加的元素给k个哈希函数

	得到对应于位数组上的k个位置

	将这k个位置设为1


布隆过滤器查询元素：

	将要查询的元素给k个哈希函数

	得到对应于位数组上的k个位置
	
	如果k个位置有一个为0，则肯定不在集合中

	如果k个位置全部为1，则可能在集合中
	
	
布隆过滤器javascript 实现：
  
 class BloomFilter {
  constructor(maxKeys, errorRate) {
    this.bitMap = [];
    this.maxKeys = maxKeys;
    this.errorRate = errorRate;
    // 位图变量的长度，需要根据maxKeys和errorRate来计算
    this.bitSize = Math.ceil(maxKeys * (-Math.log(errorRate) / (Math.log(2) * Math.log(2))));
    // 哈希数量
    this.hashCount = Math.ceil(Math.log(2) * (this.bitSize / maxKeys));
    // 已加入元素数量
    this.keyCount = 0;
  }

  bitSet(bit) {
    let numArr = Math.floor(bit / 31);
    let numBit = Math.floor(bit % 31);
    this.bitMap[numArr] |= 1 << numBit;
  }

  bitGet(bit) {
    let numArr = Math.floor(bit / 31);
    let numBit = Math.floor(bit % 31);
    return (this.bitMap[numArr] &= 1 << numBit);
  }

  add(key) {
    if (this.contain(key)) {
      return -1;
    }

    let hash1 = MurmurHash(key, 0, 0),
      hash2 = MurmurHash(key, 0, hash1);

    for (let i = 0; i < this.hashCount; i++) {
      this.bitSet(Math.abs(Math.floor((hash1 + i * hash2) % this.bitSize)));
    }

    this.keyCount++;
  }

  contain(key) {
    let hash1 = MurmurHash(key, 0, 0);
    let hash2 = MurmurHash(key, 0, hash1);

    for (let i = 0; i < this.hashCount; i++) {
      if (!this.bitGet(Math.abs(Math.floor((hash1 + i * hash2) % this.bitSize)))) {
        return false;
      }
    }

    return true;
  }
}


/**
 * MurmurHash
 *
 * 参考 http://murmurhash.googlepages.com/
 *
 * data：待哈希的值
 * offset：
 * seed：种子集
 *
 */
function MurmurHash(data, offset, seed) {
  let len = data.length,
    m = 0x5bd1e995,
    r = 24,
    h = seed ^ len,
    len_4 = len >> 2;

  for (let i = 0; i < len_4; i++) {
    let i_4 = (i << 2) + offset,
      k = data[i_4 + 3];

    k = k << 8;
    k = k | (data[i_4 + 2] & 0xff);
    k = k << 8;
    k = k | (data[i_4 + 1] & 0xff);
    k = k << 8;
    k = k | (data[i_4 + 0] & 0xff);
    k *= m;
    k ^= k >>> r;
    k *= m;
    h *= m;
    h ^= k;
  }

  // avoid calculating modulo
  let len_m = len_4 << 2,
    left = len - len_m,
    i_m = len_m + offset;

  if (left != 0) {
    if (left >= 3) {
      h ^= data[i_m + 2] << 16;
    }
    if (left >= 2) {
      h ^= data[i_m + 1] << 8;
    }
    if (left >= 1) {
      h ^= data[i_m];
    }

    h *= m;
  }

  h ^= h >>> 13;
  h *= m;
  h ^= h >>> 15;
  
  return h;
}


let bloomFilter = new BloomFilter(10000, 0.01);

bloomFilter.add("abcdefgh");
console.log(bloomFilter.contain("abcdefgh"));
console.log(bloomFilter.contain("abcdefghi"));




































