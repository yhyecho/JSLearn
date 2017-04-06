// 插入DOM

// 当我们获得了某个DOM节点，想在这个DOM节点内插入新的DOM，应该如何做？

// 如果这个DOM节点是空的，例如，<div></div>，那么，直接使用innerHTML = '<span>child</span>'就可以修改DOM节点的内容，相当于“插入”了新的DOM节点。
// 如果这个DOM节点不是空的，那就不能这么做，因为innerHTML会直接替换掉原来的所有子节点。

// 有两个办法可以插入新的节点。
// 一个是使用appendChild，把一个子节点添加到父节点的最后一个子节点。例如：
// <!-- HTML结构 -->
<p id="js">JavaScript</p>
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>
// 把<p id="js">JavaScript</p>添加到<div id="list">的最后一项：

var js = document.getElementById('js'),
    list = document.getElementById('list');
    list.appendChild(js);

// 现在，HTML结构变成了这样：
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
    <p id="js">JavaScript</p>
</div>

// 因为我们插入的js节点已经存在于当前的文档树，因此这个节点首先会从原先的位置删除，再插入到新的位置。

// 更多的时候我们会从零创建一个新的节点，然后插入到指定位置：
var list = document.getElementById('list'),
    haskell = document.createElement('p');
    haskell.id = 'haskell';
    haskell.innerText = 'Haskell';
    list.appendChild(haskell);
// 这样我们就动态添加了一个新的节点：
// <!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
    <p id="haskell">Haskell</p>
</div>

// 举个例子，下面的代码动态创建了一个<style>节点，然后把它添加到<head>节点的末尾，这样就动态地给文档添加了新的CSS定义：
var d = document.createElement('style');
d.setAttribute('type', 'text/css');
d.innerHTML = 'p { color: red }';
document.getElementsByTagName('head')[0].appendChild(d);

// insertBefore
// 如果我们要把子节点插入到指定的位置怎么办？
// 可以使用parentElement.insertBefore(newElement, referenceElement);，子节点会插入到referenceElement之前。
// 还是以上面的HTML为例，假定我们要把Haskell插入到Python之前：
// <!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>

var list = document.getElementById('list'),
    ref = document.getElementById('python'),
    haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.insertBefore(haskell, ref);   
// 新的HTML结构如下：
// <!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="haskell">Haskell</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div> 

// 可见，使用insertBefore重点是要拿到一个“参考子节点”的引用。
// 很多时候，需要循环一个父节点的所有子节点，可以通过迭代children属性实现：

var i, c,
    list = document.getElementById('list');
for (i = 0; i < list.children.length; i++) {
    c = list.children[i]; // 拿到第i个子节点
}    