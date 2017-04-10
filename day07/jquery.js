// jQuery
// JavaScript世界中使用最广泛的一个库。


// jQuery这么流行，肯定是因为它解决了一些很重要的问题。实际上，jQuery能帮我们干这些事情：

// 1.消除浏览器差异：你不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写AJAX等代码；
// 2.简洁的操作DOM的方法：写$('#test')肯定比document.getElementById('test')来得简洁；
// 3.轻松实现动画、修改CSS等各种操作。

// jQuery的理念“Write Less, Do 

// $符号
// $是著名的jQuery符号。实际上，jQuery把所有功能全部封装在一个全局变量jQuery中，
// 而$也是一个合法的变量名，它是变量jQuery的别名：

window.jQuery; // jQuery(selector, context);
window.$; // jQuery(selector, context);
$ === jQuery; // true
typeof($); // 'function'

// $本质上就是一个函数，但是函数也是对象，于是$除了可以直接调用外，也可以有很多其他属性。

// 注意，你看到的$函数名可能不是jQuery(selector, context)，
// 因为很多JavaScript压缩工具可以对函数名和参数改名，所以压缩过的jQuery源码$函数可能变成a(b, c)。

// 绝大多数时候，我们都直接用$（因为写起来更简单嘛）。但是，如果$这个变量不幸地被占用了，
// 而且还不能改，那我们就只能让jQuery把$变量交出来，然后就只能使用jQuery这个变量：

$; // jQuery(selector, context)
jQuery.noConflict();
$; // undefined
jQuery; // jQuery(selector, context)

// 这种黑魔法的原理是jQuery在占用$之前，先在内部保存了原来的$,
// 调用jQuery.noConflict()时会把原来保存的变量还原。