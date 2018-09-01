## JQ的基础框架

### 框架

**构造函数+原型对象**

首先从最基本的构造函数和原型对象做起
```
var jQuery = function(){};

jQuery.prototype = {};
```

接着给他加上别名
```
var $ = jQuery = function(a){
  this.a = a;
}

jQuery.fn = jQuery.prototype = {
  jquery: '1.x.x'
}
```
那么此时就有了一个有别名的非常常见的构造函数与原型对象，通过`var a = new jQuery`就可以调用到这个'构造函数+原型的混合模式'

但是这只能通过new来获取实例操作，JQ他却还可以通过`$()`的直接函数调用形式来获取实例，那如果想要实现函数调用返回实例的形式，那么意味着这个构造函数返回的应该是一个实例，于是我们加上返回
```
var $ = jQuery = function(a){
  this.a = a;
  return new jQuery;
}

jQuery.fn = jQuery.prototype = {
  jquery: '1.x.x'
}
```
emm，意思是没错，但是显然是行不通的，这样做势必会形成无解的死循环调用，造成内存泄漏。
于是我们想到，原型对象不也是实例嘛
```
var $ = jQuery = function(a){
  this.a = a;
  return jQuery.prototype;
}

jQuery.fn = jQuery.prototype = {
  jquery: '1.x.x'
}
```
这样的一个显而易见的问题是，我们是直接将原型对象当做实例进行操作，这意味着我们只有一个实例，是一个单例模式，很多操作都会留下痕迹，这非常不方便。

这样是行不通的，我们的最初目的是JQ的构造函数返回一个实例，根据原型和原型链我们得知，实例就是通过构造函数进行参数的自定义，然后继承构造函数指向的原型对象，并且如果将构造函数的prtotype手动更改指向，那么新生命的实例也会继承自新指向的原型对象

所以我们在外部重新声明一个构造函数，并将其指回JQ的原型对象
```
var $ = jQuery = function(a){
  this.a = a;
  return new init();
}

jQuery.fn = jQuery.prototype = {
  jquery: '1.x.x'
}

var init = function(){}
init.prototype = jQuery.prototype;
```

接着我们将其整合进JQ的原型对象
```
var $ = jQuery = function(a){
  this.a = a;
  return new jQuery.fn.init();
}

jQuery.fn = jQuery.prototype = {
  init: function(){
    },
  jquery: '1.x.x'
}

jQuery.fn.init.prototype = jQuery.prototype;
```
这样就相当于是用JQ原型对象内部的一个方法当做构造函数，并且继承了JQ的原型对象，返回的一个实例，这样，既可以用new的方式声明实例，也可以用函数方式返回实例，一个JQ的基础逻辑就基本完成了。

### extend功能扩展

###
