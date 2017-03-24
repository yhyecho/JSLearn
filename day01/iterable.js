// 遍历Array可以采用下标循环，遍历Map和Set就无法使用下标。
// 为了统一集合类型，ES6标准引入了新的iterable类型，Array、Map和Set都属于iterable类型。

// 具有iterable类型的集合，可以通过新的for ... of循环来遍历

var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'],[2, 'y'],[3, 'z']]);
for (var x of a) { // 遍历Array
    alert(x);
}
for (var x of s) { // 遍历Set
    alert(x);
}
for (var x of m) { // 遍历Map
    alert(x[0] + '=' + x[1]);
}

// 为什么用for...of 代替for ... in?
// for ... in循环由于历史遗留问题，它遍历的实际上是对象的属性名称。一个Array数组实际上也是一个对象，它的每个元素的索引被视为一个属性。
// 当我们手动给Array对象添加了额外的属性后，for ... in循环将带来意想不到的意外效果：
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
    alert(x); // '0', '1', '2', 'name'
}
// for ... in循环将把name包括在内，但Array的length属性却不包括在内。

// for ... of循环则完全修复了这些问题，它只循环集合本身的元素：
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x of a) {
    alert(x); // 'A', 'B', 'C'
}

// 然而，更好的方式是直接使用iterable内置的forEach方法，它接收一个函数，每次迭代就自动回调该函数。以Array为例：
