// Promise
// 在JavaScript的世界中，所有代码都是单线程执行的。
// 由于这个“缺陷”，导致JavaScript的所有网络操作，浏览器事件，都必须是异步执行。
// 异步执行可以用回调函数实现：

function callback() {
    console.log('Done');
}
console.log('before setTimeout()');
setTimeout(callback, 1000); // 1秒后调用callback函数
console.log('after setTimeout()');
// 观察上述代码执行，在Chrome的控制台输出可以看到：
/*
before setTimeout()
after setTimeout()
(等待1秒后)
Done
*/
// 可见，异步操作会在将来的某个时间点触发一个函数调用。

// AJAX就是典型的异步操作。以上一节的代码为例：
request.onreadystatechange = function () {
    if (request.readState === 4) {
        if (request.status === 200) {
            return success(request.responseText);
        } else {
            return fail(request.status);
        }
    }
}

// 把回调函数success(request.responseText)和fail(request.status)写到一个AJAX操作里很正常，但是不好看，而且不利于代码复用。
// 有没有更好的写法？比如写成这样：
var ajax = ajaxGet('http://...');
ajax.ifSuccess(success)
    .ifFail(fail);

// 这种链式写法的好处在于，先统一执行AJAX逻辑，不关心如何处理结果，
// 然后，根据结果是成功还是失败，在将来的某个时候调用success函数或fail函数。    


// 古人云：“君子一诺千金”，这种“承诺将来会执行”的对象在JavaScript中称为Promise对象。

// 一个最简单的Promise例子：生成一个0-2之间的随机数，如果小于1，则等待一段时间后返回成功，否则返回失败：
function test() {
    var timeOut = Math.random() * 2;
    log('set timeout to:' + timeOut + 'seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            log('call resolve()...');
            resolve('200 OK');
        } else {
            log('call reject()...');
            reject('timeout in ' + timeOut + 'seconds.');
        }
    }, timeOut * 1000);
}

// test函数有两个参数，这两个参数都是函数，如果执行成功，我们就调用resolve(); 如果执行失败我们调用reject();
// 可以看出，test() 函数只关心自身的逻辑，并不关心具体的resolve() 和 reject将如何处理结果


// 有了执行函数，我们就可以用一个Promise对象来执行它，并在将来某个时刻获得成功或失败的结果：
var p1 = new Promise(test);
var p2 = p1.then(function (result) {
    console.log('成功： ' + result);
});
var p3 = p2.catch(function (reason) {
    console.log('失败:' + reason);
});

// 变量p1是一个Promise对象，它负责执行test函数。由于test函数在内部是异步执行的，当test函数执行成功时，我们告诉Promise对象：
// 如果成功，执行这个函数：
p1.then(function (result) {
    console.log('成功: ' + result);
});
// 当test函数执行失败时，我们告诉Promise对象：
p2.catch(function (reason) {
    console.log('失败: ' + reason);
});
// Promise对象可以串联起来，所以上述代码可以简化为：
new Promise(test).then(function (result) {
    console.log('成功: ' + result);
}).catch(function (reason) {
    console.log('失败: ' + reason);
});

// Promise还可以做更多的事情，比如，有若干个异步任务，需要先做任务1，如果成功后再做任务2，
// 任何任务失败则不再继续并执行错误处理函数。

// 要串行执行这样的异步任务，不用Promise需要写一层一层的嵌套代码。有了Promise，我们只需要简单地写：
job1.then(job2).then(job3).catch(handleError);

// setTimeout可以看成一个模拟网络等异步执行的函数
// 现在，我们把上一节的AJAX异步执行函数转换为Promise对象，看看用Promise如何简化异步处理：
// ajax函数将返回Promise对象：
function ajax(method, url, data) {
    var request = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(request.status);
                }
            }
        };
        request.open(method, url);
        request.send(data);
    });
}


// 除了串行执行若干异步任务外，Promise还可以并行执行异步任务。

// 试想一个页面聊天系统，我们需要从两个不同的URL分别获得用户的个人信息和好友列表，
// 这两个任务是可以并行执行的，用Promise.all()实现如下：

var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P2');
});
// 同时执行p1和p2,并在它们都完成后执行then；
Promise.all([p1, p2]).then(function (results) {
    console.log(results); // 获得一个Array: ['P1', 'P2']
});

// 有些时候，多个异步任务是为了容错。比如，同时向两个URL读取用户的个人信息，只需要获得先返回的结果即可。
// 这种情况下，用Promise.race()实现：
var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P2');
});
Promise.race([p1, p2]).then(function (result) {
    console.log(result); // 'P1'
});

// 由于p1执行较快，Promise的then()将获得结果'P1'。p2仍在继续执行，但执行结果将被丢弃。

// 如果我们组合使用Promise，就可以把很多异步任务以并行和串行的方式组合起来执行。



