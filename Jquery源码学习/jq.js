var $ = jQuery = function(selector, context){
    return new jQuery.fn.init(selector, context);
};

jQuery.fn = jQuery.prototype = {
  jquery: '1.x.x',
  constructor: jQuery,

  init: function(selector, context){

  },
  html: function(str){
    jQuery.each(this, function(i,v){
      this.innerHTML = str;
    });
  },
  each: function(func){
    return jQuery.each(this, func);
  },
}

jQuery.fn.init.prototype = jQuery.prototype;

jQuery.extend = jQuery.fn.extend = function(obj){
  //简单版，还有对象合并，深拷贝，兼容等功能需实现
  for(let i in obj){
    this[i] = obj[i];
  }
  return this;
};

jQuery.extend({
  each: function(obj, func){
    //each需对不可遍历的obj进行兼容处理
    for(let i in obj){
      func.call(obj[i],i,obj[i]);
    }
    return obj;
 }
});

