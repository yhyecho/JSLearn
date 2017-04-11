// 事件

// 因为JavaScript在浏览器中以单线程模式运行，
// 页面加载后，一旦页面上所有的JavaScript代码被执行完后，就只能依赖触发事件来执行JavaScript代码。

// 浏览器在接收到用户的鼠标或键盘输入后，会自动在对应的DOM节点上触发相应的事件。
// 如果该节点已经绑定了对应的JavaScript处理函数，该函数就会自动调用。

// 举个例子，假设要在用户点击了超链接时弹出提示框，我们用jQuery这样绑定一个click事件：

/* HTML:
 *
 * <a id="test-link" href="#0">点我试试</a>
 *
 */

// 获取超链接的jQuery对象:
var a = $('#test-link');
a.on('click', function () {
    alert('Hello');
});

// on方法用来绑定一个事件，我们需要传入事件名称和对应的处理函数。
// 另一种更简化的写法是直接调用click()方法：
a.click(function () {
    alert('Hello!');
});
// 两者完全等价。

//  鼠标事件

// click:鼠标单击时触发；
// dblclick:鼠标双击时触发；
// mouserenter:鼠标进入时触发；
// mouserleave:鼠标移出时触发；
// mousemove:鼠标在DOM内部移动时触发；
// hover:鼠标进入和退出时触发两个函数，相当于mouseenter加上mouseleave。


// 键盘事件
// 键盘事件仅作用在当前焦点的DOM上，通常是<input>和<textarea>。

// keydown:键盘按下时触发；
// keyup:键盘松开时触发；
// keypress:按一次键后触发。

// 其他事件
// focus:当DOM获得焦点时触发；
// blur:当DOM失去焦点时触发；
// change:当<input>、<select>或<textarea>的内容改变时触发；
// submit:当<form>提交时触发；
// ready:当页面被载入并且DOM树完成初始化后触发。


// 其中，ready仅作用于document对象。由于ready事件在DOM完成初始化后触发，
// 且只触发一次，所以非常适合用来写其他的初始化代码。假设我们想给一个<form>表单绑定submit事件，下面的代码没有预期的效果：

/*
<html>
<head>
    <script>
        // 代码有误:
        $('#testForm).on('submit', function () {
            alert('submit!');
        });
    </script>
</head>
<body>
    <form id="testForm">
        ...
    </form>
</body>
*/
// 因为JavaScript在此执行的时候，<form>尚未载入浏览器，所以$('#testForm)返回[]，并没有绑定事件到任何DOM上。

// 所以我们自己的初始化代码必须放到document对象的ready事件中，保证DOM已完成初始化：
/*
<html>
<head>
    <script>
        $(document).on('ready', function () {
            $('#testForm').on('submit', function () {
                alert('submit!');
            });
        });
    </script>
</head>
<body>
    <form id="testForm">
        ...
    </form>
</body>
*/

// 这样写就没有问题了。因为相关代码会在DOM树初始化后再执行。
// 由于ready事件使用非常普遍，所以可以这样简化：
$(document).ready(function () {
    // .on('submit', function) 也可以简化
    $('#testForm').submit(function () {
        alert('submit!');
    });
});

// 甚至还可以再简化为：
$(function () {
    // init...
});

// 上面的这种写法最为常见。如果你遇到$(function () {...})的形式，牢记这是document对象的ready事件处理函数。

// 完全可以反复绑定事件处理函数，它们会依次执行：
$(function () {
    console.log('init A...');
});
$(function () {
    console.log('init B...');
});
$(function () {
    console.log('init C...');
});


// 事件参数
// 有些事件，如mousemove和keypress，我们需要获取鼠标位置和按键的值，否则监听这些事件就没什么意义了。
// 所有事件都会传入Event对象作为参数，可以从Event对象上获取到更多的信息：

$(function () {
    $('#testMouseMoveDiv').mousemove(function (e) {
        $('#testMouseMoveSpan').text('pageX=' + e.pageX + ', pageY= ' + e.pageY);
    });
});

// 取消绑定
// 一个已被绑定的事件可以解除绑定，通过off('click', function)实现：

function hello() {
    alert('hello!');
}
a.click(hello); // 绑定事件

// 10秒钟后解除绑定
setTimeout(function() {
    a.off('click', hello);
}, 10000);

// 需要特别注意的是，下面这种写法是无效的：
// 绑定事件:
a.click(function () {
    alert('hello!');
});

// 解除绑定:
a.off('click', function () {
    alert('hello!');
});

// 这是因为两个匿名函数虽然长得一模一样，但是它们是两个不同的函数对象，
// off('click', function () {...})无法移除已绑定的第一个匿名函数。

// 为了实现移除效果，可以使用off('click')一次性移除已绑定的click事件的所有处理函数。
// 同理，无参数调用off()一次性移除已绑定的所有类型的事件处理函数。