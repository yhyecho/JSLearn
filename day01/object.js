// JavaScript的对象是一种无序的集合数据类型，它由若干键值对组成。

var xiaoyu = {
    name: 'yu',
    brith: 1991,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};

// 可以通过变量xiaoyu来获取小明的属性
xiaoyu.name; // 'yu'
xiaoyu.birth; // 1991
// 访问属性是通过.操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用''括起来;
var xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School'
};
// 此时访问这个属性也无法使用.操作符，必须用 ['xxx'] 来访问
xiaohong['middle-school']; // 'No.1 Middle School'
xiaohong['name']; // '小红'
xiaohong.name; // '小红' 可以直接通过object.prop的形式访问一个属性了。

// 访问一个不存在的属性，不报错，而是返回undefined
var xiaoming = {
    name: '小明'
};
xiaoming.age; // undefined

// 由于JavaScript的对象是动态类型，你可以自由地给一个对象添加或删除属性：
var xiaoming = {
    name: '小明'
};
xiaoming.age; // undefined
xiaoming.age = 18; // 新增一个age属性
xiaoming.age; // 18
delete xiaoming.age; //删除age属性
xiaoming.age; // undefined
delete xiaoming['name']; // 删除name属性
xiaoming.name; // undefined
delete xiaoming.school; // 删除一个不存在的school属性也不会报错

// 如果我们要检测xiaoming是否拥有某一属性，可以用in操作符
'name' in xiaoming; // true
'grade' in xiaoming; // false
'toString' in xiaoming; // true
// 不过要小心，如果in判断一个属性存在，这个属性不一定是xiaoming的，它可能是xiaoming继承得到的：

// 因为toString定义在object对象中，而所有对象最终都会在原型链上指向object，所以xiaoming也拥有toString属性

// hasOwnProperty() 要判断一个属性是否是xiaoming自身拥有的，而不是继承得到的
var xiaoming = {
    name: '小明'
};
xiaoming.hasOwnProperty('name'); // true
xiaoming.hasOwnProperty('toString'); // false
