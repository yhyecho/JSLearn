// map
// 举例说明，比如我们有一个函数f(x)=x2，
// 要把这个函数作用在一个数组[1, 2, 3, 4, 5, 6, 7, 8, 9]上，就可以用map实现

// 由于map() 方法定义在JavaScript的Array中，我们调用Array的map()方法定义在JavaScript的Array中，
// 我们调用Array的map()方法，传入我们自己的函数,就得到一个新的Array作为结果：

function pow(x) {
    return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
// map() 传入的参数是pow, 即函数对象本身。

// 其实写一个循环，也可以计算出结果。
var f = function (x) {
    return x * x;
};
var arr = [1, 2, 3, 4, 5];
var result = [];
for (var i = 0; i < arr.length; i++) {
    result.push(f(arr[i]));
}
// 的确可以，但是，从上面的循环代码，我们无法一眼看明白“把f(x)作用在Array的每一个元素并把结果生成一个新的Array”。
// 所以，map()作为高阶函数，事实上它把运算规则抽象了，因此，我们不但可以计算简单的f(x)=x2，
// 还可以计算任意复杂的函数，比如，把Array的所有数字转为字符串：

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
// 只需要一行代码

// 
// Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，
// 这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算，其效果就是：
[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
// 比方说对一个Array求和，就可以用reduce实现：
var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y){
    return x + y;
}); // 25

// 要把[1, 3, 5, 7, 9]变换成整数13579，reduce()也能派上用场：
var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x * 10 + y;
}); // 13579

// 继续改进这个例子，想办法把一个字符串13579先变成Array——[1, 3, 5, 7, 9]，
// 再利用reduce()
var arr = s.split('').map(
   function(x){
        return x - 0; // 运算符强制进行了类型转换
    }
)
return arr.reduce(
   function(x,y){
        return (x - 0) * 10 + (y - 0);
    }
)