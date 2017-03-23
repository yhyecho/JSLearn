// JavaScript的字符串就是用''或""括起来的字符表示。
// [1]单行字符串
// \表示转义字符
// \n 换行 \t 制表 \\ 转义自身
// \x## 转义十六进制 字符
' I \'m \"OK\" ' //表示的字符串内容是：I'm "OK"!
// \u####表示一个Unicode字符

// [2] 多行字符串
`这是一个
多行
字符串！`;

// [3] 模版字符串
const name = '小明';
const age = 20;
const message = `你好， ${name},你今年 ${age}岁了！`;
alert(message);

// [4] 字符串操作
var s = 'Hello, world!';
s.length; // 13
// 获取字符串某个指定位置的值
var s = 'Hello, world!';

s[0]; // 'H'
s[6]; // ' '
s[7]; // 'w'
s[12]; // '!'
s[13]; // undefined 超出范围的索引不会报错，但一律返回undefined

// 需要注意的是，字符串是不可变的，如果对字符串的某个索引值赋值，不会有任何错误，但是也没有任何效果。
var s = 'Test';
s[0] = 'X';
alert(s) // s仍然为 'Test'