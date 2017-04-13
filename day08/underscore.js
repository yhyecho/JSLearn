// underscore

// JavaScript是函数式编程语言，支持高阶函数和闭包。函数式编程非常强大，可以写出非常简洁的代码。
// 例如Array的map()和filter()方法：

'use strict';
var a1 = [1, 4, 9, 16];
var a2 = a1.map(Math.sqrt); // [1, 2, 3, 4]
var a3 = a2.filter((x) => {return x % 2 === 0; }); // [2, 4]

// 现在问题来了，Array有map()和filter()方法，可是Object没有这些方法。
// 此外，低版本的浏览器例如IE6～8也没有这些方法，怎么办？

// 方法一，自己把这些方法添加到Array.prototype中，
// 然后给Object.prototype也加上mapObject等类似的方法。

// 方法二，直接找一个成熟可靠的第三方开源库，使用统一的函数来实现map(),filter()这些操作。


// 我们采用方法二，选择的第三方库就是underscore.

// 正如jQuery统一了不同浏览器之间的DOM操作的差异，让我们可以简单地对DOM进行操作，
// underscore则提供了一套完善的函数式编程的接口，让我们更方便地在JavaScript中实现函数式编程。

// jQuery在加载时，会把自身绑定到唯一的全局变量$上
// underscore与其类似，会把自身绑定到唯一的全局变量_上，这也是为啥它的名字叫underscore的原因。


// 用underscore实现map()操作如下：
'use strict';
_.map([1, 2, 3], (x) => x * x); // [1, 4, 9]

// 咋一看比直接用Array.map()要麻烦一点，可是underscore的map()还可以作用于Object：
'use strict';
_.map({ a: 1, b: 2, c: 3}, (v, k) => k + '=' + v); // ['a=1', 'b=2', 'c=3']