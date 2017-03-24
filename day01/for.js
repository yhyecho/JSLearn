// 循环
// 计算 1-10000的累积和
var x = 0;
var i;
for (i = 1; i <= 10000; i++) {
    x = x + i;
}
x; // 50005000
// 分析
// i = 1 这是初始条件，将变量i置为1;
// i <= 10000 这是判断条件，满足就循环，不满足9就退出循环
// i++ 这是每次循环后的递增条件

// for 循环最常用的地方是利用索引来遍历数组
var arr = ['Apple', 'Google', 'Microsoft'];
var i, x;
for (i = 0; i < arr.length; i++) {
    x = arr[i];
    alert(x);
}

// break退出循环
// for循环的3个条件都是可以省略的，如果没有退出循环的判断条件，就必须使用break语句退出循环，否则就是死循环：
var x = 0;
for (;;) {
    if (x > 1000) {
        break; // 通过break来退出当前循环
    }
    x++;
}

// for...in
// for循环的一个变体是for ... in 循环，它可以把一个对象的所有属性依次循环出来;
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    alert(key); // 'name', 'age', 'city'
}

// 要过滤掉对象继承的属性，用hasOwnProperty()来实现：
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        alert(key); // 'name', 'age', 'city'
    }
}

// 由于Array也是对象，而它的每个元素的索引被视为对象的属性，因此，for ... in循环可以直接循环出Array的索引：
var a = ['A', 'B', 'C'];
for (var i in a) {
    alert(i); // '0', '1', '2'
    alert(a[i]); // 'A', 'B', 'C'
}
// 请注意，for ... in对Array的循环得到的是String而不是Number。

// while循环
// while循环只有一个判断条件，条件满足，就不断循环，条件不满足时则退出循环。
// 100以内所有奇数之和
var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
x; // 

// do ... while
// 它和while循环的唯一区别在于，不是在每次循环开始的时候判断条件，而是在每次循环完成的时候判断条件：
var n = 0;
do {
    n = n + 1;
} while (n < 100);
n; // 100
// 用do { ... } while()循环要小心，循环体会至少执行1次，而for和while循环则可能一次都不执行。
// 在编写循环代码时，务必小心编写初始条件和判断条件，尤其是边界值。特别注意i < 100和i <= 100是不同的判断逻辑。