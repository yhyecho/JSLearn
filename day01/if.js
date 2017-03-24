// JavaScript使用if () { ... } else { ... }来进行条件判断。
// 单行条件判断
var age = 20;
if (age >= 18) {
    alert('adult');
} else {
    alert('teenager');
}

// 多行条件判断
var age = 3;
if (age >= 18) {
    alert('adult');
} else if (age >= 6) {
    alert('teenager');
} else {
    alert('kid');
}

// 如果if的条件判断语句结果不是true或false怎么办？例如：
var s = '123';
if (s.length) { // 条件计算结果为3
    //
}
// 注意：js 把null, undefined, 0, NaN 和 空字符串'' 视为false，
// 因此上述代码条件判断的结果是 true
