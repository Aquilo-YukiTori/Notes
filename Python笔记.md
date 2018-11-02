##### ord()与chr()

ord将字符转为整数表示(十进制)

chr则将编码转换为对应的字符

##### 字符串类型

Python的字符串类型是str，在内存中默认以Unicode表示，一个字符视情况对应若干个字节。<br>
但如果要在网络上传输，或者保存到硬盘，就需要把str变为以字节为单位的bytes<br>
在Python中bytes类型的数据表示为`x = b'ABC'`<br>
<br>
用`encode() decode()`方法进行转换<br>
如果bytes中包含无法解码的字节，decode()方法会报错<br>
如果bytes中只有一小部分无效的字节，可以传入errors='ignore'忽略错误的字节<br>
`b'\xe4\xb8\xad\xff'.decode('utf-8', erros='ignore')`<br>
<br>
用`len('xxxx')`计算str包含多少个字符<br>
当目标是bytes，len函数会计算目标的字节数<br>
<br>
用`format()`进行格式化字符串

##### list(array)、turple

list:列表<br>
用len()获取list的长度<br>
index可以是负数从而相当于倒着数<br>
append()在list末尾添加元素<br>
insert(x,'xxx')在索引号为x的位置插入'xxx'<br>
pop()删除list末尾的元素，也可以接受一个参数来作为索引位置删除指定位置的元素<br>

turple:元组<br>
和list相似，不同点在于一旦初始化就不能修改

##### 循环
forIn循环和while循环<br>
`range()`生成一个整数序列，通常和list配合使用`list(range(5))`则生成一个从0-5的数组<br>

##### dict(map)和set

dict:字典<br>
同JSON`d = {'Michael': 95,'Bob': 75, 'Tracy': 85}`<br>
也可直接通过键key取到值`d['Tracy']`<br>
因为当取不存在的key的值时会报错，所以要事先验证key的存在性<br>
1. 通过in判断key的存在性<br>
`'Tracy' in d`
2. 通过dict的get()方法，key不存在时返回none，因为在python中none不显示，所以get的第二个参数可以指定在key不存在时的返回值`d.get('c',-1)`<br>

用pop()删除一个key<br>

set:<br>
存储一组key，但不存储value，key值不重复<br>
`s = set([1,2,3])`<br>
set()添加元素<br>
remove()删除元素<br>

##### 函数

定义函数:
```
def func(x ,y):
		return x
```
<br>
空函数
```
def nop():
		pass
```
<br>
用内置函数isinstance()对参数进行类型检查
```
if not isinstance(para1, {int, float}):
		raise TypeError('xxxxx')
```
对参数para1进行是否是int或float类型的检查，类型错误则抛出错误
<br>
函数返回多个值
```
`return x,y`
在获取时可直接用i,j = func()
```
其实返回的是一个turple，在外部则用了解构赋值
<br>




