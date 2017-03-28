// 在一个对象中绑定函数，称为这个对象的方法。
// 在JavaScript中，对象的定义是这样的：
var xiaoming = {
    name: '小明',
    birth: 1990
};

// 但是，如果我们给xiaoming绑定一个函数，就可以做更多的事情。
// 比如，写个age()方法，返回xiaoming的年龄：
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
}

xiaoming.age; // function xiaoming.age()
xiaoming.age(); //今年调用是25，明年调用就变成26了

// 在一个方法内部，this是一个特殊变量，它始终指向当前对象，也就是xiaoming这个变量。
// 所以，this.

// 拆开写
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 27 正常结果
getAge(); //NaN

// 注意！
// JavaScript的函数内部如果调用了 this，那么这个this到底指向谁？
// 答案是视情况而定！
// 如果以对象的方法形式调用，比如xiaoming.age()，该函数的this指向被调用的对象，也就是xiaoming，这是符合我们预期的。
// 如果单独调用函数，比如getAge()，此时，该函数的this指向全局对象，也就是window。

// 问题
'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - this.birth;
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // Uncaught TypeError: Cannot read property 'birth' of undefined

// 结果又报错了！原因是this指针只在age方法的函数内指向xiaoming，
// 在函数内部定义的函数，this又指向undefined了！（在非strict模式下，它重新指向全局对象window！）
// 修复的办法也不是没有，我们用一个that变量首先捕获this：

'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // 25
// 用var that = this;，你就可以放心地在方法内部定义其他函数，而不是把所有语句都堆到一个方法中。

// apply
// 要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接受两个参数
// 第一个参数就是需要绑定的this变量，第二个参数是Array,表示函数本身的参数。

// 用apply修复getAge()调用：
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 25
getAge.apply(xiaoming, []); // 25, this指向xiaoming, 参数为空

// 另一个与apply() 类似的方法是call(), 唯一区别是：
// 1. apply() 把参数打包成Array再传入
// 2. call() 把参数按顺序传入

// 比如调用Math.max(3, 5, 4)，分别用apply()和call()实现如下：
Math.max.apply(null, [3, 5, 4]); // 5
Math.max.call(null, 3, 5, 4); // 5
// 对普通函数调用，我们通常把this绑定为null。

// 装饰器
// 利用apply(),我们还可以动态改变函数的行为。
// JavaScript的所有对象都是动态的，即使内置的函数，我们也可以重新指向新的函数。

// 现在假定我们想统计一下代码一共调用了多少次parseInt()，可以把所有的调用都找出来，然后手动加上count += 1，
// 不过这样做太傻了。最佳方案是用我们自己的函数替换掉默认的parseInt()：

var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
}

// 测试
parseInt('10');
parseInt('20');
parseInt('30');
count; // 3
