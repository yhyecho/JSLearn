// js 数据类型
// [1] Number
const int = 123; // 整数
const float = 0.456; // 浮点数
const double = 1.2345e3; // 科学计数法表示 1.2345*1000
const int2 = -99; // 负数
// NaN Not a Number, 当无法计算结果时用NaN表示
// Infinity 超过js最大值时用此表示

// 四则运算
const result1 = 1 + 2; // 3
const result2 = (1 + 2) * 5 / 2; // 7.5
const result3 = 2 / 0; // Infinity
const result4 = 0 / 0; // NaN
const result5 = 10 % 3; // 1
const result6 = 10.5 % 3; // 1.5 求余运算

// [2] 字符串
const char = 'a';
const String = "abc" // 只有 a, b, c 这三个字符

// [3] 布尔值

const boolean1 = true; // true
const boolean2 = false; // false
2 > 1; // true
2 >= 3; // false

// && 与运算 
true && true; // 这个&&语句计算结果为true
true && false; // 这个&&语句计算结果为false
false && true && false; // 这个&&语句计算结果为false
// || 或运算
false || false; // 这个||语句计算结果为false
true || false; // 这个||语句计算结果为true
false || true || false; // 这个||语句计算结果为true
// ! 非运算
! true; // 结果为false
! false; // 结果为true
! (2 > 5); // 结果为true
// 布尔值经常用在条件判断中，比如：
const age = 15;
if (age >= 18) {
    alert('adult');
} else {
    alert('teenager');
}

// 比较运算符
2 > 5; // false;
5 >= 2; //true;
7 == 7; //true;
// 实际上，js允许对任意数据类型做比较！
false == 0; //true //会先自动转换数据类型，再进行比较！
false === 0; // false 始终坚持用三等于做比较！

//另一个例外是NaN这个特殊的Number与所有其他值都不相等
NaN === NaN; // false
isNaN(NaN); // true 唯一判断的函数

// 浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true

// [4] null和undefined
// null 表示一个“空”的值，它和0以及空字符串''不同，0是一个数值，‘’表示长度为0的字符串，而null表示“空”
// undefined 表示值为定义

// [5] 数组 js数组可以包括任意数据类型
[1, 2 ,3.14, 'Hello', null, true];
// 另一种创建数组的方式
new Array(1, 2, 3);
// 然而，出于代码的可读性考虑，强烈建议直接使用[]。
// 通过索引的方式访问数组元素
var arr = [1, 2, 3.14, 'Hello', null, true];
arr[0]; // 返回索引为0的元素，即1
arr[5]; // 返回索引为5的元素，即true
arr[6]; // 索引超出了范围，返回undefined


// [6] 对象
 const person = {
     name: 'HuaYang',
     age: 27,
     tags: ['js', 'web', 'mobile'],
     city: 'NanJing',
     hasCar: false,
     zipCode: null
 }

 // 获取对象的属性
person.name; // 'HuaYang'
person.zipCode // null

// [7] 变量
const a; // 声明了变量a，此时a的值为undefined
const $b = 1; //声明了变量$b, 同时给$b赋值，此时$b的值为1
const s_007 = '007'; // s_007是一个字符串
const Answer = true; // Answer是一个布尔值true
const t = null; // t的值为null

// js是动态类型语言， 可以对统一变量赋予任意类型的值
var a = 123; // a的值是整数123
a = 'ABC'; // a变为字符串

// java是静态类型语言，类型不匹配时，编译期就报错

// strict模式
// 如果一个变量没有通过var申明就被使用，那么该变量就自动被申明为全局变量：
i = 10; // i现在是全局变量

// 如果全局用了相同的变量名，会造成变量的互相污染

// 使用var申明的变量则不是全局变量，它的范围被限制在该变量被申明的函数体内（函数的概念将稍后讲解），同名变量在不同的函数体内互不冲突。

// 为了修补JavaScript这一严重设计缺陷，ECMA在后续规范中推出了strict模式，在strict模式下运行的JavaScript代码，强制通过var申明变量，未使用var申明变量就使用的，将导致运行错误。